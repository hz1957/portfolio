# ETL Generation 架构升级：Blueprint-Executor (P-E) 模式

**Status**: Draft Design
**Date**: 2026-02-12

---

## 1. 背景与痛点

### 1. 宏观流程：Agent Handoff
整体架构遵循 **Agent Handoff** 模式，由两个独立的 Agent 协作完成：

- **Agent 1: Chatbot Agent** (Conversational Interface)
  - **职责**：与用户多轮对话，澄清需求，确认意图。
  - **产出**：结构化的任务描述 (Structured Instruction) 或初级 Plan。
  - **动作**：Handoff -> Agent 2。

- **Agent 2: ETL Chat Strategy** (Backend Workflow)
  - **职责**：接收指令，生成可执行的 ETL DAG 代码。
  - **机制**：采用 Blueprint-Executor 模式高效生成。

### 架构概览

```mermaid
graph TD
    subgraph Agent 1: Chatbot (Frontend/API)
        User --> ConversationalLoop
        ConversationalLoop -->|Refine & Confirm| PlanIntent[Structured Instruction]
    end

    PlanIntent -->|Handoff / API Call| Agent2

    subgraph Agent 2: ETL Strategy (Backend Workflow)
        Agent2[Global Planner / Architect] -->|Generate| Blueprint[DAG Blueprint]
        
        Blueprint --> LocalExecutor[Local Executor]
        
        subgraph Execution Loop
            LocalExecutor -->|Fetch Next Step| CurrentStep
            CurrentStep -->|Local Context| NodeGenerator[Node Generator LLM]
            NodeGenerator -->|Generate Args| Builder
        end
    end
```

---

## 3. 详细设计

### 3.1 Phase 1: Global Planner (The Architect)

**职责**：一次性规划出完整的 DAG 拓扑结构，不涉及具体的 SQL 细节或字段映射。

**输入**：
- 用户指令
- 表元数据（Schema Summary）

**输出**：`Blueprint` (JSON)

```json
{
  "plan_reasoning": "用户需要计算各地区的平均转化率。步骤：1.选表A 2.选表B 3.Join 4.Group By",
  "steps": [
    {
      "id": "step_1",
      "tool": "AddSelectColumnsNode",
      "intent": "从订单表中选择 user_id, amount, region",
      "dependencies": []
    },
    {
      "id": "step_2",
      "tool": "AddSelectColumnsNode",
      "intent": "从用户表中选择 user_id, signup_date",
      "dependencies": []
    },
    {
      "id": "step_3",
      "tool": "AddJoinNode",
      "intent": "通过 user_id 关联订单和用户表",
      "dependencies": ["step_1", "step_2"]
    },
    {
      "id": "step_4",
      "tool": "AddSqlScriptNode",
      "intent": "按 region 分组计算平均 amount",
      "dependencies": ["step_3"]
    }
  ]
}
```

**优势**：
- LLM 可以专注于逻辑链路的正确性，不受 SQL 语法细节的干扰。
- 生成速度快，Token 消耗低。

### 3.2 Phase 2: Local Executor (The Mason)

**职责**：遍历 Blueprint，为每一步生成具体的工具参数。

**核心逻辑**：
对于 Blueprint 中的每一个 `step`：
1. **Resolve Dependencies**: 根据 `step.dependencies` 找到上游节点的**实际输出 Schema**。
2. **Local Context Construction**:
   - 这里的 Context **只包含**：
     - 当前节点的 `intent`
     - 上游依赖节点的 Schema (Aliases)
   - **不需要**包含整个对话历史或之前的无关节点。
3. **Generation**: 调用轻量级 LLM (或专门的 Prompt) 生成工具参数（如 SQL 语句）。
   - Prompt: *"你的任务是通过写 SQL 来实现意图 '{intent}'。可用的上游字段是: {upstream_fields}..."*

**优势**：
- **上下文纯净**：生成 SQL 时，LLM 只看到相关的字段，不会被无关信息干扰（减少幻觉）。
- **可并行化**：如果 Steps 之间没有依赖，甚至可以并行生成（虽然 ETL 通常是串行的）。
- **易于修复**：如果某一步生成出错，只需要重试这一步，不需要重跑整个 Plan。

---

## 4. 流程对比

| 维度 | ReAct (Old) | Blueprint-Executor (New) |
|------|-------------|--------------------------|
| **规划方式** | 边走边看 (Step-by-Step) | 全局地图 (Map-First) |
| **上下文长度** | 越来越长 (包含所有历史) | **恒定且短** (仅关注局部依赖) |
| **错误恢复** | 难 (一步错步步错) | 易 (单步重试/修正 Blueprint) |
| **适用场景** | 简单、探索性任务 | **复杂、确定性 ETL 任务** |

---

## 5. 进阶优化策略 (Advanced Optimizations)

为了进一步提升 Agent 的稳定性和生成质量，建议引入以下机制：

### 5.1 Self-Correction & Reflection (自我修正与反思)
- **Local Executor 阶段**: 
  - 引入 **Retry-with-Feedback** 循环。如果生成的 SQL 校验失败（如 Spark 语法错误），将错误日志（Error Log）作为反馈回传给 LLM 进行自我修正，而不是直接抛出异常。
- **Global Planner 阶段**:
  - 引入 **Critic Agent**。在生成 Blueprint 后，由 Critic 检查逻辑连贯性（例如：是否存在孤立节点？Join Key 类型是否匹配？）。

### 5.2 RAG-Enhanced Context (RAG 增强上下文)
- **Dynamic Few-Shot**: 
  - 根据当前的 Intent（如 "计算留存率"），从向量数据库检索相似的 **成功 ETL 案例** 作为 Few-Shot 示例。
  - 这能显著提升复杂逻辑（如 Window Function, Pivot）的生成成功率。
- **Schema Pruning**:
  - 对于几百列的宽表，利用 RAG 或语义相似度预先筛选出 Top-K 相关列，减少 Context Window 压力。

### 5.3 Structured Handoff Protocol (结构化交接协议)
Agent 1 (Chatbot) 传给 Agent 2 的不应仅是自然语言，而应是严格定义的 **JSON Protocol**：

```json
{
  "user_intent": "Summary",
  "selected_tables": ["table_a", "table_b"],
  "transformation_steps": [
    {"type": "filter", "description": "Filter active users"},
    {"type": "join", "description": "Join with orders on user_id"}
  ],
  "constraints": ["Keep only valid records"]
}
```
这消除了 Agent 2 解析自然语言 Plan 的歧义。

### 5.4 Weighted Tool Selection (加权工具选择)
- 虽然目前工具较少，但随着工具库扩展（如 AddPivotNode, AddWindowNode），可以基于 Intent 的语义相似度为每个工具计算 **Selection Score**。
- Executor 优先尝试高分工具，减少无效尝试。

---

## 6. 迁移路线

1.  **定义 Blueprint Schema**: 确定 JSON 结构。
2.  **实现 Global Planner Prompt**: 专注于生成高质量的拓扑结构。
3.  **重构 Executor**: 修改 `ChatSchemaPlanner` 的循环逻辑，使其按照 Blueprint 执行，而不是自己 ReAct。
4.  **混合模式**: 保留 ReAct 作为 "Fallback" 或 "Exploratory Mode"，当 Global Planner 无法生成有效计划时使用。

---

**总结**: 这个架构将极大地提升复杂 ETL 任务生成的成功率和效率，是向更高阶 Agent 演进的必经之路。

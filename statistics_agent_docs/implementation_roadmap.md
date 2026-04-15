# ETL Agent 系统演进：综合实施路线图 (Master Implementation Roadmap)

**Version**: 1.0  
**Date**: 2026-02-12  
**Target**: 实现高稳定、灵活修改、逻辑专业的 SOTA ETL Agent。

---

## Initiative 1: Blueprint-Executor (P-E) 架构
> **目标**：解决全量生成时的 ReAct 循环效率低、易跑偏问题。

### 1.1 数据结构定义 (Schema Definition)
在 `app/services/etl/strategies/chat/schemas.py` 中定义：

```python
class BlueprintStep(BaseModel):
    id: str                 # e.g., "step_1"
    tool_name: str          # "AddSelectColumnsNode", "AddJoinNode"
    intent: str             # "Extract user fields", "Join orders"
    dependencies: List[str] # ["step_0"] (References to BlueprintStep IDs)

class Blueprint(BaseModel):
    reasoning: str
    steps: List[BlueprintStep]
```

### 1.2 Global Planner 实现
在 `ChatSchemaPlanner` 中新增：
- **方法**: `generate_blueprint(user_instruction, schema_summary) -> Blueprint`
- **Prompt**: 
  - Role: "ETL Architect"
  - Task: "Design the DAG topology. DO NOT write SQL. Focus on Join/Union/Filter sequence."
  - Output: JSON `Blueprint`

### 1.3 Local Executor 改造
修改 `plan` 方法，支持 "Blueprint Mode"：
- **Input**: 接收 `Blueprint` 对象。
- **Loop**:
  - 遍历 `blueprint.steps`。
  - **Context Isolation**: 为每一步构建仅包含上游 Alias 的 Prompt。
  - **Generation**: 调用 LLM 生成具体 Args (SQL)。
  - **Execution**: 调用 `builder.execute_step`。
  - **Self-Correction**: 如果报错，捕获 Error 并通过 LLM 重试（维持现有机制）。

---

## Initiative 2: Hybrid Modification Strategy (混合修改策略)
> **目标**：解决修改场景下 "微小改动触发全量重构" 的低效问题。

### 2.1 意图分类 (Intent Classifier)
在 `ChatSchemaGenerator.generate` 入口处：
- **方法**: `classify_intent(instruction, old_etl_summary) -> Enum`
- **Output**: `PURE_MODIFICATION` | `STRUCTURE_CHANGE` | `RESTRUCTURE`

### 2.2 Changeset Planner (用于 Structure Change)
- **Schema**:
  ```python
  class AtomicOp(BaseModel):
      type: Literal["ADD", "DELETE", "REWIRE", "UPDATE"]
      node_id: str
      args: Dict[str, Any] # e.g., {"new_sources": ["node_new"]}
  ```
- **Prompt**: "Generate a definitive list of atomic operations to apply the change."
- **Logic**: 支持 `REWIRE` 操作，即显式修改现有节点的 `source_ids`，这是插入节点的关键。

### 2.3 影响分析 (Impact Analysis)
- **Algorithm**:
  - `Score = (Add * 1.0) + (Delete * 1.0) + (Rewire * 0.5) + (Update * 0.1)`
- **Threshold**: 如果 `Score > 5` 或 `Score > TotalNodes * 0.3` -> 触发全量 `RESTRUCTURE`。

---

## Initiative 3: RAG-Enhanced SQL Generation (RAG 增强)
> **目标**：解决复杂业务逻辑（如留存、漏斗）的 SQL 生成准确率问题。

### 3.1 知识库构建
- **Content**: 收集 50+ 个高质量 ETL 案例（JSON Plan + User Intent）。
- **Storage**: 本地向量索引（FAISS or Simple Cosine Similarity on embeddings）。
- **Data**: 包含常见 Pattern（Window Functions, Pivot, Multi-key Join）。

### 3.2 检索与注入
在 Local Executor 生成 SQL 之前：
- **Retrieve**: `search_examples(current_step_intent, k=3)`
- **Prompt Injection**:
  ```
  [Reference Examples]
  Intent: "Calculate 7-day retention"
  SQL: "SELECT ... FROM ... LEFT JOIN ... ON datediff(...) = 7"
  ```

---

## 实施优先级 (Priority)

1.  **Phase 1 (Core)**: Blueprint-Executor 架构。这是基石，解决最基本的生成稳定性。
2.  **Phase 2 (Flexibility)**: Hybrid Modification。解决用户修改时的体验瓶颈。
3.  **Phase 3 (Quality)**: RAG 增强。进一步提升复杂场景的交付质量。

# Chatbot ETL 总体架构说明

## 文档定位

本文档用于说明当前 Chatbot Agent 与 ETL Agent 的真实落地架构、关键数据契约，以及两者之间的执行边界。

它替代以下旧设计稿的总体描述职责：

- `knowledge_base/smart_routing_design.md`
- `knowledge_base/agent_modification_strategy.md`
- `knowledge_base/blueprint_executor_architecture.md`
- `knowledge_base/implementation_roadmap.md`

以下两份文档仍保留，作为补充视角：

- `knowledge_base/chatbot_ui_sequence.md`
- `knowledge_base/etl_chat_sequence.md`

本文只描述当前代码已存在的行为，不把未来设计当成既成事实。

---

## 1. 总览

系统当前由两个 Agent 组成。

### Agent 1: Chatbot Agent

职责：

- 管理多轮对话与意图分类
- 按执行语义在 `CHITCHAT` / `DATA_EXPERT` / `PLAN_RECALL` / `REFINEMENT` / `NEW_REQUEST` 之间路由
- 在需要时执行选表、生成 `refined_instruction`
- 在没有本地 baseline 时，尝试从远端 `getEtlDetail` 自动 bootstrap 当前 ETL 上下文
- 在执行前组装 `userInstruction`、`oldEtl`、`oldInstruction`、`tableList`

代码入口：

- `app/services/sql_chatbot/service.py`
- `app/api/sql_chatbot_api.py`

### Agent 2: ETL Agent

职责：

- 接收 Agent 1 组装好的请求
- 在 workflow 包装层中执行 rewrite/select/transform/generate/map/enhance/finalize
- 根据是否存在 `oldEtl` 选择“新建”或“修改”路径
- 生成最终 ETL JSON

代码入口：

- `app/services/etl/workflow/workflow_engine.py`
- `app/services/etl/strategies/chat/generator.py`
- `app/services/etl/strategies/chat/planner.py`
- `app/services/etl/strategies/chat/modification_planner.py`

---

## 2. 端到端主流程

### 2.1 对话阶段

1. 用户消息通过 WebSocket 进入 Agent 1。
2. Agent 1 先加载全量表清单与当前会话 active path。
3. 如果 active path 上还没有本地 baseline，Agent 1 会在意图分类前尝试远端 bootstrap：
   - 需要 `Token` 与 `dataFlowId`
   - `getEtlDetail` 必须返回超过 2 个有效 action
   - 必须能从远端 `INPUT_DATASET` 推断出本地表
4. 若 bootstrap 成功，会插入一条 `REMOTE_BOOTSTRAP_NOTICE` 系统消息，并附带 `etl_plan`、`relevant_tables`、`remote_bootstrap_source`。
5. Agent 1 保存当前 user message，再重新读取 active path 作为后续 prompt 上下文。
6. Agent 1 从 artifact 恢复最近的 `relevant_tables`，同时计算当前 baseline 是否存在、baseline 来源，以及 active path 上最近一条 `etl_plan` 的轻量结构摘要。
7. Agent 1 执行轻量意图分类，并据此选择执行模式。
8. 如有需要，执行 Table Selector，生成 `relevant_tables`。
9. 在 `FAST_REFINEMENT` / `HEAVY_REFINEMENT` / `PLAN_RECALL` 下，Agent 1 还会尝试拉取远端 ETL 摘要，作为 prompt context 注入。
10. Assistant 消息入库，并按分支写入 artifact。
11. WebSocket `done` 事件返回 `message_id`、`intent`、`is_executable`。

### 2.2 执行阶段

1. 前端对某条可执行消息调用 `/execute-plan-async`。
2. 若目标消息是 `ROLLBACK_NOTICE`，API 会先 remap 到它的父消息。
3. Agent 1 从数据库加载 `ai_mapping_req` 模板。
4. Agent 1 调用 `prepare_etl_request()`：
   - 解析 `refined_instruction`
   - 解析 target-scoped `relevant_tables`
   - 解析 `PLAN_RECALL` 的 source message
   - 决定是否注入 `oldEtl` / `oldInstruction`
   - 把 `tableList` 预筛到 target message 对应的表范围
   - 写入 `_skip_instruction_rewrite = True`
5. 若存在 `oldEtl`，Agent 1 会在执行前与远端 `getEtlDetail` 对齐 `actions`。
6. API 写入 `execute_plan_start` artifact，返回 `202 Accepted`。
7. 后台 worker 调用 Agent 2 workflow 生成 `final_json`。
8. 成功后将 `etl_plan` 写回消息，并尝试远端 `saveEtl`。

---

## 3. Agent 1 当前架构

### 3.1 智能路由分支

当前意图分类包含 5 类：

| Intent | 说明 | 当前执行模式 |
| --- | --- | --- |
| `CHITCHAT` | 闲聊、打招呼、意图不清 | `CHITCHAT` |
| `DATA_EXPERT` | 字段/表结构/CDISC 等知识问答 | `DATA_EXPERT` |
| `PLAN_RECALL` | 回顾当前或上一轮计划 | `PLAN_RECALL` |
| `REFINEMENT` | 对已有计划做补充或修改 | `FAST_REFINEMENT` 或 `HEAVY_REFINEMENT` |
| `NEW_REQUEST` | 明确的新主题、新需求 | `FULL_NEW_REQUEST` |

当前分类器不是只看用户一句话，还会看到：

- 最近几轮历史摘要
- 当前缓存表范围
- `baseline_exists`
- `baseline_source`，取值为 `local` / `remote` / `none`
- active path 上最近一条 `etl_plan` 生成的轻量 `Current pipeline structure` 摘要

因此当前存在一条明确的 baseline-aware 规则：

- 如果已经存在当前 ETL baseline，且用户看起来是在“继续改当前流程”，分类器会优先倾向 `REFINEMENT`，而不是 `NEW_REQUEST`。

### 3.2 各分支行为

#### `CHITCHAT`

- 使用轻量聊天 prompt
- 不选表
- 不保存执行 artifact

#### `DATA_EXPERT`

- 注入全量 schema
- 回答字段、表结构、标准解释问题
- 不保存执行 artifact

#### `PLAN_RECALL`

- 不执行 Table Selector
- 从历史中提取最近一次可执行计划
- 若 recall 来源本身还是 `PLAN_RECALL`，会继续解链到最终 source message
- 复用 source message 的 `relevant_tables`
- 给当前消息写 `plan_recall_source`
- 如果输出中包含 `Refined Instruction`，也会保存新的 `refined_instruction`

#### `FAST_REFINEMENT`

- 直接复用从 artifact 恢复的最近 `relevant_tables`
- 不重新跑 Table Selector
- 如果恢复失败，自动降级到 `HEAVY_REFINEMENT`
- 可叠加远端 ETL prompt 摘要

#### `HEAVY_REFINEMENT`

- 当 classifier 判定 `intent=REFINEMENT` 且 `needs_new_tables=true` 时，会直接进入该模式
- 重新跑 Table Selector
- 可带上历史用户消息与当前已选表作为 selector hint
- 若选不到表，直接改走澄清回复，不生成执行计划
- 可叠加远端 ETL prompt 摘要

#### `FULL_NEW_REQUEST`

- 跑 Table Selector
- 不携带旧选表上下文
- 若选到表，生成新的 `Refined Instruction`
- 若未选到表，则走澄清回复

### 3.3 远端 baseline bootstrap 与 prompt 上下文

当前 Agent 1 有两种不同的远端能力，作用不同：

#### A. remote bootstrap

触发条件：

- 当前 conversation 的 active path 上没有本地 baseline
- WebSocket 请求带 `Token`
- conversation 上存在 `dataFlowId`
- `getEtlDetail` 返回超过 2 个有效 action
- 能从远端 `INPUT_DATASET` 匹配到本地 `all_tables`

产物：

- 插入 `REMOTE_BOOTSTRAP_NOTICE`
- 写入：
  - `etl_plan`
  - `relevant_tables`
  - `remote_bootstrap_source`

用途：

- 让后续意图分类知道“当前已有 remote baseline”
- 让后续 refinement 能直接恢复表范围

#### B. remote ETL prompt context

触发模式：

- `FAST_REFINEMENT`
- `HEAVY_REFINEMENT`
- `PLAN_RECALL`

跳过条件：

- 无 `Token`
- 无 `dataFlowId`
- `getEtlDetail` 有效 action 数量不足

用途：

- 将当前远端 ETL DAG 摘要注入 prompt
- 帮助 LLM区分“继续改当前线上流程”与“仅复述聊天里刚生成的方案”

### 3.4 Agent 1 关键 artifact 契约

| Artifact | 生产时机 | 用途 |
| --- | --- | --- |
| `relevant_tables` | 选表后或 plan recall 复用时 | 约束执行阶段 `tableList`，也用于 refinement 恢复 |
| `refined_instruction` | 可执行计划输出后 | 执行阶段唯一可信的 `userInstruction` 来源 |
| `plan_recall_source` | `PLAN_RECALL` 找到 source plan 后 | recall 执行时跟随 source plan 语义 |
| `etl_plan` | ETL 生成成功后，或 remote bootstrap 时 | 保存最终 ETL JSON / 当前远端 baseline |
| `etl_plan_meta` | `oldEtl` 与远端不一致时 | 记录 mismatch 溯源信息 |
| `remote_bootstrap_source` | remote bootstrap 成功时 | 记录 bootstrap 来源 `dataFlowId` 与检查信息 |
| `execute_plan_start` | 执行请求受理后 | 前端轮询与预计耗时展示 |
| `execute_plan_error` | 执行失败时 | 错误信息 |
| `execute_plan_cancelled` | 取消时 | 取消标记 |
| `remote_sync_result` | 远端同步成功时 | 保存远端结果 |
| `remote_sync_error` | 远端同步失败时 | 保存远端错误 |
| `remote_sync_skipped` | rollback 后无可同步计划时 | 记录跳过原因 |

### 3.5 消息可执行性约束

当前系统把“消息是否可执行”定义为：

- `role = assistant`
- 存在非空 `refined_instruction`
- 存在至少一个带 `dsId` 的 `relevant_tables`

该结果会通过两条协议暴露：

- 历史消息序列化字段 `is_executable`
- WebSocket `done` 事件字段 `is_executable`

### 3.6 单例 artifact 与追加 artifact

数据库层区分两类写法：

- `add_artifact()`：追加型 artifact
- `set_message_artifact()`：单例型 artifact

当前单例更新主要用于：

- `etl_plan`
- `etl_plan_meta`

这样可以避免同一条消息下堆积多份当前状态类 artifact。

---

## 4. Agent 1 到 Agent 2 的执行组装

### 4.1 `prepare_etl_request()` 的职责

`prepare_etl_request()` 是执行前的关键组装步骤，负责：

1. 只在 active path 上查找上下文，避免 rollback 分支串扰。
2. 校验目标消息是否真的在 active path 上。
3. 若目标消息是 `PLAN_RECALL`，先解析 `plan_recall_source`，得到真正的 source plan message。
4. 从有效执行消息解析 `refined_instruction`，注入 `userInstruction`。
5. 仅当有效执行语义不是 `NEW_REQUEST` 时，才回溯最近的 `etl_plan` 作为 `oldEtl`，并尝试保留 `oldInstruction`。
6. 只使用 target message 自己的 `relevant_tables` 预筛请求里的 `tableList`。
7. 写入 `_skip_instruction_rewrite = True`，明确告诉 Agent 2 不要再次重写这条指令。

### 4.2 `oldEtl` 远端同步

当前已经实现 `oldEtl` 与远端 `getEtlDetail` 的对齐逻辑：

1. 找到回溯消息中的旧 `etl_plan`
2. 根据 conversation 上的 `dataFlowId` 调 `getEtlDetail`
3. 若远端有效 action 数量不足，则跳过同步，保留本地 `oldEtl`
4. 若远端有效 action 充足，则将本地 `oldEtl.actions` 与远端 `data.actions` 做语义比较
5. 如一致，直接沿用
6. 如不一致：
   - 用远端 `actions` 覆盖本地旧 `etl_plan`
   - 给该消息写入 `etl_plan_meta = mismatch`
   - 抑制 `oldInstruction`，避免错误地走 NL-vs-NL 修改路径

### 4.3 `mismatch` 的溯源信息

当前 `etl_plan_meta` 在 mismatch 时会记录：

- `alignment = "mismatch"`
- `reason = "remote_actions_differs"`
- `comparedBy = "actions"`
- `oldEtlMessageId`
- `oldEtlBeforeSync`
- `remoteDataFlowId`
- `remoteEtlDetail`
- `checkedAt`

### 4.4 `actions` 的语义比较口径

当前不是直接做原始 JSON 字节级比较，而是先做归一化，再比较。

会忽略的噪音包括：

- 节点顺序差异
- `position`
- `fdId` / `fdType`
- `preview`
- `OUTPUT_DATASET.dataSource.dsId`
- 一些空占位字段

仍然保留真正影响语义的差异，例如：

- `SQL_SCRIPT.sql`
- `JOIN_DATA.columnFuses[].predicates`
- `JOIN_DATA.selectedColumns`
- `SELECT_COLUMNS.columns`

### 4.5 交给 Agent 2 的最终约束

交给 Agent 2 的 payload 具有以下特点：

- `userInstruction` 已经来自 Agent 1 的 `refined_instruction`
- `tableList` 已经被 target message 的 `relevant_tables` 缩小过
- `oldEtl` 只会在非 `NEW_REQUEST` 语义下出现
- `oldInstruction` 只有在 `oldEtl` 与远端对齐时才保留
- `_skip_instruction_rewrite = True`，表示本次请求已由 Agent 1 完成可执行指令准备

需要注意：

- Agent 2 的 workflow 仍然会继续跑 `select_datasets`
- 但它面对的是 Agent 1 预筛后的候选表集合，而不是原始全量表

---

## 5. Agent 2 当前架构

### 5.1 workflow 包装层

Agent 2 的 chat 策略不是一个单独的 planner 入口，而是被 workflow graph 包裹：

1. `rewrite_user_instruction`
2. `select_datasets`
3. `transform_request`
4. `create_basic_schema`
5. `process_select_columns_with_llm`
6. `enhance_schema`
7. `finalize_json`

当前在 chatbot 执行链路中，由于 Agent 1 已经准备好 `refined_instruction`，所以 `rewrite_user_instruction` 一般会因为 `_skip_instruction_rewrite = True` 而跳过，并写入：

- `processing_metadata.rewrite_skipped = true`
- `processing_metadata.rewrite_skip_reason = "prepared_by_agent1"`

### 5.2 `ChatSchemaGenerator` 路由入口

`ChatSchemaGenerator.generate()` 当前分三类路由：

| 条件 | 路由 |
| --- | --- |
| 无 `oldEtl` | `ChatSchemaPlanner` |
| 有 `oldEtl` 且分类为 `PURE_MODIFICATION` | `ChatModificationPlanner(mode="PURE_MODIFICATION")` |
| 有 `oldEtl` 且分类为 `STRUCTURE_CHANGE` | `ChatModificationPlanner(mode="STRUCTURE_CHANGE")` |
| 有 `oldEtl` 且分类为 `RESTRUCTURE` | `ChatSchemaPlanner` |
| 修改规划器返回 `None` | 回退到 `ChatSchemaPlanner` |

这里的 `None` 目前既可能来自：

- 显式 `Replan`
- 修改路径最终没有产生有效 schema 变化的 NoOp fallback

### 5.3 修改意图分类

Agent 2 的 modification intent classifier 已经实现：

- 优先用 `new_table_list` 与 `oldEtl` 的输入表对比做规则快判
- 若有 `oldInstruction`，优先做 NL-vs-NL 分类
- 否则退化为“当前 pipeline DAG 摘要 + 新请求”的轻量 LLM 分类

输出三类：

- `PURE_MODIFICATION`
- `STRUCTURE_CHANGE`
- `RESTRUCTURE`

### 5.4 `ChatSchemaPlanner` 新建路径

`ChatSchemaPlanner` 用于：

- 没有 `oldEtl` 的新建
- `RESTRUCTURE`
- 修改路径 fallback 到重建

它当前可用的创建类工具包括：

- `AddSelectColumnsNode`
- `AddSqlScriptNode`
- `AddJoinNode`
- `AddUnionNode`

### 5.5 `ChatModificationPlanner` 修改路径

#### `PURE_MODIFICATION`

允许：

- `UpdateSqlScriptNode`
- `UpdateSelectColumnsNode`
- `UpdateJoinNode`
- `UpdateUnionNode`
- `Replan`

适合：

- 改 SQL 条件
- 改输出列
- 改 join 条件
- 改 union 模式

#### `STRUCTURE_CHANGE`

在上面基础上继续允许：

- `AddSqlScriptNode`
- `AddSelectColumnsNode`
- `AddJoinNode`
- `AddUnionNode`
- `RewireSource`
- `DeleteNode`

适合：

- 插入新节点
- 删除节点
- 改连线
- 追加 join / union

### 5.6 Agent 2 当前已落地的安全与运维能力

当前真实存在的保护能力包括：

- 结构化 `audit_log`
- `Update*` 后的 schema change alert
- `Update*` / `RewireSource` 后的 `cascade_revalidate`
- `STRUCTURE_CHANGE` 模式下的 soft watchdog
- `STRUCTURE_CHANGE` 模式下的 hard watchdog
- 修改路径无有效 schema 变化时的 NoOp fallback
- 连续 3 轮全失败时主动中止，避免无限重试
- 调试输出落到 `agentic_debug/` 与 `agentic_debug/mod/`

当前文档不再把“checkpoint / rollback 已完整实现”作为既成事实，因为代码里真正稳定落地的是上面这些机制。

---

## 6. 当前实现状态总表

| 能力 | 状态 | 说明 |
| --- | --- | --- |
| Agent 1 智能路由 | 已实现 | 包含 chat、expert、plan recall、refinement、new request |
| remote baseline bootstrap | 已实现 | 无本地 baseline 时自动尝试远端引导 |
| baseline-aware intent classification | 已实现 | 分类器显式考虑 baseline 是否存在及其来源 |
| `relevant_tables` artifact 驱动的 refinement 恢复 | 已实现 | 不依赖进程内缓存 |
| `PLAN_RECALL` source 语义执行 | 已实现 | recall 执行时跟随 source plan |
| `is_executable` 协议 | 已实现 | 历史消息与 WS done 都会暴露 |
| target-scoped `relevant_tables` 执行约束 | 已实现 | 执行时只信任目标消息的表范围 |
| `oldEtl` 从 active path 回溯 | 已实现 | 避免 rollback 分支串扰 |
| `oldEtl` 与远端 `getEtlDetail` 对齐 | 已实现 | 有效 action 充足时执行 |
| Agent 1 prepared request -> skip Agent 2 rewrite | 已实现 | `_skip_instruction_rewrite = True` |
| Agent 2 修改意图分类 | 已实现 | `PURE_MODIFICATION/STRUCTURE_CHANGE/RESTRUCTURE` |
| 统一修改规划器 | 已实现 | 支持 Update/Add/Rewire/Delete/Replan/Union |
| 结构修改后的级联重验证 | 已实现 | 在 toolkit / planner 链路中生效 |
| 修改路径 NoOp fallback | 已实现 | 无有效变更时回退到全量重建 |
| Blueprint-Executor 全局蓝图模式 | 未实现 | 仍然保留为后续方向 |
| 独立 critic / reflection agent | 未实现 | 当前无二次审查 Agent |
| RAG few-shot 案例检索 | 未实现 | 当前无案例检索层 |

---

## 7. 当前建议的理解方式

### 7.1 对 Agent 1

不要再把它理解成“只有一个 prompt 的聊天生成器”。

它当前本质上是：

- 会话路由器
- artifact 编排器
- baseline 引导器
- 执行前 payload 装配器

### 7.2 对 Agent 2

不要再把它理解成“只会从头生成 DAG”。

它当前本质上是：

- 一个 workflow 包装层
- 一个新建 planner
- 一个统一修改 planner
- 一个失败时可自动回退到重建的执行系统

### 7.3 对旧设计稿

旧文档的主要问题不是方向完全错误，而是：

- 已实现与未实现混在一起
- UI 历史语义、Agent 1、Agent 2 边界不够清晰
- 没有跟上 remote bootstrap、`is_executable`、workflow skip rewrite 这些新规则

本文的目标就是把这些内容收敛到一份可维护说明里。

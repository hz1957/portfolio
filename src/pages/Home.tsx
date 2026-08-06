import { ArrowUpRight, BookOpen, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useOutletContext } from "react-router";
import type { Language, LanguageOutletContext } from "../language";

const dofPaperHref = `${import.meta.env.BASE_URL}degrees-of-freedom-estimation.pdf`;

type TrainingItem = {
  title: string;
  detail: string;
};

type Experience = {
  role: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

type Project = {
  title: string;
  tech: string;
  detail?: string;
  points?: string[];
  href?: string;
  reportHref?: string;
};

type SkillGroup = {
  label: string;
  items: string[];
};

type Education = {
  degree: string;
  school: string;
  year: string;
};

type PortfolioContent = {
  hero: {
    tag: string;
    name: string;
    role: string;
    bio: string;
    emailLabel: string;
  };
  sections: {
    training: string;
    trainingTag: string;
    agents: string;
    experience: string;
    projects: string;
    skills: string;
    research: string;
    degrees: string;
    articles: string;
  };
  trainingWork: TrainingItem[];
  agentWork: string[];
  experiences: Experience[];
  projects: Project[];
  skillGroups: SkillGroup[];
  education: Education[];
  codeLabel: string;
  reportLabel: string;
  fullArticleLabel: string;
  contactNote: string;
};

const trainingWorkEn: TrainingItem[] = [
  {
    title: "Agentic systems and data automation",
    detail:
      "AI engineer combining machine learning, software development, and statistical modeling, focused on architecture and implementation for agentic systems and intelligent data automation platforms with LangGraph, AutoGen, and SGLang.",
  },
  {
    title: "Statistics-driven AI evaluation",
    detail:
      "Proficient in Python, SQL, and R, with experience applying experimental design, statistical evaluation, and error analysis to improve the stability of automated AI workflows.",
  },
  {
    title: "Production LLM performance evaluation",
    detail:
      "Evaluates large language models in production settings, including Qwen-Max and DeepSeek V4, with a focus on high-concurrency throughput and tool-calling robustness.",
  },
  {
    title: "End-to-end AI engineering perspective",
    detail:
      "Bridges data processing, model orchestration, system architecture, service deployment, and evaluation to design solutions across model capability, system constraints, and business needs.",
  },
];

const agentWorkEn: string[] = [];

const experiencesEn: Experience[] = [
  {
    role: "AI Research Engineer",
    company: "R2.AI",
    place: "",
    period: "June 2025 - May 2026",
    points: [
      "Designed the architecture for an in-development conversation-to-visual ETL platform and core agent workflows, mapping natural-language data transformation requirements to executable JSON DAGs for a Figma Make-like data transformation system. The broader orchestration layer used Qwen-Max / DeepSeek V4 for complex task planning, while I owned post-training and evaluation for the Text-to-SQL subagent.",
      "For the Text-to-SQL subagent, fine-tuned Qwen2.5-Coder-14B with LoRA on execution-verified Spider SQL trajectories across 4xH100 and 4xH200 GPU clusters; combined DeepSpeed ZeRO-3, FlashAttention, and activation checkpointing to improve SQL execution accuracy from 68% to 80%. Migrated the subagent from general LLM calls to the fine-tuned Qwen2.5-Coder-14B inference path, reducing upstream model concurrency pressure and improving single-step output speed by ~4x.",
      "Built and led a trajectory-based reinforcement learning pipeline for business ETL tasks, supporting chain rollouts and multi-branch Tree Search rollouts.",
      "Implemented GRPO post-training in verl with sandbox execution outcomes as reward signals; tuned reward design, KL penalties, PPO epochs, and rollout configurations while comparing Tree Search and Chain Rollout strategies. Tree GRPO reached 84% accuracy, while optimized chain n=8 maintained 83% with 60% less rollout cost.",
      "Profiled and optimized a verl/Ray/vLLM distributed training stack, resolving high-concurrency GPU OOM bottlenecks and reducing Actor-to-vLLM synchronization and actor-update latency to improve RL-stage throughput.",
      "Designed and implemented a LangGraph plan-execute-repair loop with domain-specific tool calling, structured execution feedback, and PySpark validation, enabling autonomous correction of invalid SQL and workflow plans.",
      "Medical NLP model fine-tuning and productionization: fine-tuned a Chinese-MacBERT medical named entity recognition (NER) model on the CMeEE dataset, achieving over 95% token-level accuracy and packaging the sequence-labeling training and inference workflow.",
    ],
  },
  {
    role: "Biostatistician",
    company: "Parexel",
    place: "Durham, NC",
    period: "July 2021 - Feb 2025",
    points: [
      "Conducted statistical modeling for oncology clinical trials, building and maintaining survival models (Cox regression, Kaplan-Meier) and mixed-effects models for over 2,000 patients; handled missing data to support efficacy evaluation and risk prediction.",
      "Designed and implemented hypothesis testing, A/B testing, linear and generalized linear mixed-effects models, and ANCOVA for neurological clinical trials to analyze cognitive score changes and guide dose adjustment.",
      "Integrated large-scale data from electronic medical records, lab tests, and follow-up logs using SQL and R to assess treatment efficacy and safety across multiple data sources.",
      "Developed SQL, R, and SAS programs for data analysis and visualization, producing high-quality deliverables.",
      "Authored and reviewed Statistical Analysis Plans (SAPs); maintained SDTM and ADaM data standards.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "University of North Carolina at Chapel Hill",
    place: "",
    period: "Jan 2021 - May 2021",
    points: [
      "Analyzed risk factors for SARS-CoV-2 household transmission in North Carolina (~500 participants); processed data in R, created ggplot2 visualizations, and performed mixed-model and ICC analyses.",
    ],
  },
];

const projectsEn: Project[] = [
  {
    title: "SQL Agent Post-Training",
    tech: "SFT / GRPO / DeepSpeed / vLLM",
    detail:
      "Open-source post-training project for SQL/DAG generation, covering execution-verified SFT data, trajectory-based RL, GRPO reward/search ablations, and profiling around DeepSpeed, verl/Ray, and vLLM.",
    href: "https://github.com/hz1957/sql_agent_training",
    reportHref: "https://hz1957.github.io/sql_agent_training/",
  },
  {
    title: "Open-Source LLM RAG Knowledge Base and Agent System",
    tech: "Python / UltraRAG / Milvus / FastAPI",
    points: [
      "Built an enterprise knowledge-base service on UltraRAG, integrating document ingestion, retrieval, event queues, observability, and OpenAI-compatible external LLM APIs such as DeepSeek.",
      "Integrated BGE embedding/reranker models and MinerU document parsing for PDF, Word, and Excel ingestion, intelligent chunking, and high-precision semantic embeddings.",
      "Built a Milvus/MySQL RAG backend with RabbitMQ asynchronous ingestion and FastAPI retrieval APIs, supporting directory-watch and REST triggers for index updates.",
    ],
  },
  {
    title: "Scientific Paper Citation Impact Prediction",
    tech: "Python / XGBoost / scikit-learn / NLP",
    points: [
      "Built a leakage-safe temporal ML pipeline on ~50K AI/ML papers using text representations, metadata, venue, affiliation, and prior author/reference history, with 2018-2020 training and 2021-2022 held-out testing.",
      "Evaluated K-Means solutions (k=2-16) on LSA text representations using silhouette score; examined cluster structure with UMAP and t-SNE; selected an interpretable k=8 partition revealing 4x variation in high-impact-paper rates across research topics.",
      "Evaluated nine leakage-safe feature stacks across Ridge, Random Forest, and XGBoost; the final model recovered 48.3% of high-impact papers within a 10% screening budget.",
    ],
    href: "https://github.com/hz1957/Predicting-Citation-Impact-of-Scientific-Papers",
    reportHref:
      "https://hz1957.github.io/Predicting-Citation-Impact-of-Scientific-Papers/progress-documents/final/",
  },
  {
    title: "Parameter-Efficient NLP Model Fine-Tuning with Adapters",
    tech: "Python / RoBERTa / LoRA / Adapter",
    points: [
      "Implemented LoRA and bottleneck adapters in RoBERTa using adapter-transformers, reducing trainable parameters by ~99%.",
      "Tuned hyperparameters across multiple text classification tasks to improve performance while keeping the model lightweight.",
      "Achieved competitive results on public datasets: SciCite (Macro F1 = 82.8%), IMDB (88.3%), and AG News (94.8%), with up to ~2% accuracy improvement.",
    ],
  },
  {
    title: "Fresh Produce Delivery Management System",
    tech: "Java / Spring Boot / Docker",
    points: [
      "Built a fresh produce delivery management backend from scratch using Java, Spring Boot, and REST APIs for order placement, delivery tracking, and returns processing.",
      "Used UML class and sequence diagrams for system design, separating module responsibilities to improve maintainability and extensibility.",
      "Containerized services with Docker and configured Nginx load balancing and reverse proxying to support high-concurrency traffic.",
    ],
    href: "https://github.com/hz1957/Drone-Delivery-Service",
  },
];

const skillGroupsEn: SkillGroup[] = [
  {
    label: "LLM Post-Training & RL",
    items: ["SFT", "LoRA", "GRPO", "PPO", "Reward Modeling", "Execution-Based Rewards", "verl"],
  },
  {
    label: "Distributed Training & Inference",
    items: [
      "PyTorch",
      "DeepSpeed ZeRO-3",
      "FSDP",
      "Ray",
      "vLLM",
      "FlashAttention",
      "Activation Checkpointing",
      "GPU Training/Inference Profiling",
    ],
  },
  {
    label: "Agentic & LLM Systems",
    items: [
      "LangGraph",
      "AutoGen",
      "SGLang",
      "Tool Calling",
      "MCP",
      "Text-to-SQL",
      "Structured Output",
      "Execution-Feedback Repair",
    ],
  },
  {
    label: "Systems, Data & Infrastructure",
    items: [
      "Python",
      "SQL",
      "R",
      "SAS Macro",
      "Spark/PySpark",
      "Java",
      "C++",
      "Docker",
      "AWS",
      "MySQL",
      "Redis",
      "NoSQL",
      "JSON Schema",
      "Playwright",
    ],
  },
  {
    label: "Product & Agent Skill Packaging",
    items: ["Figma", "Enterprise Agent Skills Framework"],
  },
];

const educationEn: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "Georgia Institute of Technology",
    year: "2023 - 2026",
  },
  {
    degree: "M.S. Biostatistics",
    school: "University of North Carolina at Chapel Hill",
    year: "2019 - 2021",
  },
  {
    degree: "B.S. Biological Science",
    school: "Nanjing University",
    year: "2011 - 2016",
  },
];

const trainingWorkZh: TrainingItem[] = [
  {
    title: "智能体与数据自动化",
    detail:
      "AI 工程师，兼具机器学习、软件开发与统计建模能力，专注于智能体系统与智能数据自动化平台的架构设计与实现（LangGraph、AutoGen、SGLang）。",
  },
  {
    title: "统计驱动的 AI 评估",
    detail:
      "精通 Python、SQL、R，擅长将实验设计、统计评估与误差分析方法应用于 AI 系统，提升自动化流程的稳定性。",
  },
  {
    title: "生产模型性能评测",
    detail:
      "负责大语言模型在生产环境中的性能评测（如 Qwen-Max、DeepSeek V4），重点关注高并发场景下的吞吐效率与工具调用鲁棒性。",
  },
  {
    title: "端到端系统视角",
    detail:
      "具备从数据处理、模型编排、系统架构到服务部署与评测的端到端 AI 工程视角，能够在模型能力、系统约束与业务需求之间完成技术方案设计。",
  },
];

const agentWorkZh: string[] = [];

const experiencesZh: Experience[] = [
  {
    role: "AI 研究员",
    company: "R2.AI",
    place: "",
    period: "2025.06 - 2026.05",
    points: [
      "打造“对话生成可视化” ETL 平台与核心智能体链路。主导设计类 Figma Make 的生成式数据转换系统，将自然语言数据转换需求映射为可执行 JSON DAG；平台整体编排与复杂任务规划基于 Qwen-Max / DeepSeek V4，重点负责 Text-to-SQL 子智能体的模型后训练与链路评估。",
      "针对 Text-to-SQL 子智能体，基于 LoRA 的大规模语言模型高效微调，依托 4×H100 与 4×H200 GPU 分布式集群，使用经执行验证的 Spider SQL 轨迹高质量数据对 Qwen2.5-Coder-14B 进行指令微调。深度融合 DeepSpeed ZeRO-3、FlashAttention 及 Activation Checkpointing 等加速技术，将模型 SQL 执行准确率从 68% 提升至 80%；并将子智能体从通用大模型调用迁移至经微调的 Qwen2.5-Coder-14B 推理链路，降低上游模型并发调用压力，使单步输出速度提升约 4 倍。",
      "构建并主导基于 GRPO 的强化学习流水线（RLVR / RLAIF），在 verl 框架内实现以“沙盒执行结果”为奖励信号的 GRPO 流水线。系统性调优 Reward 机制、KL 惩罚等超参数，并对比多分支 Tree Search 与 Chain Rollout 策略。Tree GRPO 将准确率提升至 84%，优化后的链式 n=8 方案在削减 60% Rollout 开销的情况下仍保持 83%。",
      "针对 verl / Ray / vLLM 混合架构开展分布式训练链路性能剖析，定位并解决高并发下的 OOM 显存瓶颈，大幅缩短 Actor-to-vLLM 状态同步与 Actor Update 延迟，显著提升强化学习阶段的整体吞吐量。",
      "设计并实现基于 LangGraph 的 plan-execute-repair 闭环，结合领域专用工具调用、结构化执行反馈与 PySpark 验证，使系统能够自主修正无效 SQL 和工作流方案。",
      "医疗 NLP 模型微调与工程化落地：基于 Chinese-MacBERT 训练医学命名实体识别（NER）模型，在 CMeEE 数据集上实现 95% 以上 token-level 准确率，并沉淀序列标注训练与推理流程。",
    ],
  },
  {
    role: "生物统计师",
    company: "Parexel",
    place: "",
    period: "2021.07 - 2025.02",
    points: [
      "为肿瘤临床试验开展统计建模，为超过 2,000 名患者构建并维护生存模型（Cox 回归、Kaplan-Meier）和混合效应模型，并处理缺失数据，以支持疗效评估和风险预测。",
      "针对神经系统临床试验，设计并实施假设检验（A/B 测试）、线性及广义线性混合效应模型和 ANCOVA，分析认知评分变化并为剂量调整提供依据。",
      "使用 SQL 和 R 整合电子病历、实验室检测及随访记录等大规模数据，开展多数据源的疗效和安全性评估。",
      "开发 SQL、R 和 SAS 程序，完成数据分析与可视化，并产出高质量交付成果。",
      "编写并审核统计分析计划（SAP），维护 SDTM 和 ADaM 数据标准。",
    ],
  },
  {
    role: "研究生研究助理",
    company: "北卡罗来纳大学教堂山分校",
    place: "",
    period: "2021.01 - 2021.05",
    points: [
      "分析北卡罗来纳州 SARS-CoV-2 家庭传播的风险因素（约 500 名参与者）；使用 R 完成数据处理和统计分析（混合模型、ICC），并通过 ggplot2 进行可视化。",
    ],
  },
];

const projectsZh: Project[] = [
  {
    title: "SQL 智能体后训练",
    tech: "SFT / GRPO / DeepSpeed / vLLM",
    detail:
      "面向 SQL/DAG 生成的开源后训练项目，涵盖经执行验证的 SFT 数据、基于轨迹的强化学习、GRPO 奖励与搜索策略对照，以及围绕 DeepSpeed、verl/Ray 和 vLLM 的性能分析与故障诊断。",
    href: "https://github.com/hz1957/sql_agent_training",
    reportHref: "https://hz1957.github.io/sql_agent_training/",
  },
  {
    title: "开源大模型 RAG 知识库与智能体系统开发",
    tech: "Python / UltraRAG / Milvus / FastAPI",
    points: [
      "基于 UltraRAG 框架构建企业级知识库服务，通过一套 Docker 模板整合文档写链路、检索链路、事件队列及系统可观测性，并对接兼容 OpenAI 格式的外部大模型 API（如 DeepSeek 等），实现业务系统与生成服务的高效对接。",
      "集成 BGE 系列 Embedding / Reranker 模型与 MinerU 文档解析引擎，支持 PDF、Word、Excel 等多格式文件的智能解析与分块，构建高精度的语义嵌入服务，提升检索质量。",
      "使用 Milvus 向量数据库与 MySQL 搭建垂直领域 RAG 检索后端，结合 RabbitMQ 实现异步文档入库管道，支持通过目录监听（Watch）或 RESTful API 触发知识抽取与索引更新。",
      "采用 FastAPI 暴露标准化检索接口，通过单容器架构高效运行 API、消息网关与后台 Worker，并内置系统可观测性面板与任务调度系统，提升系统可维护性。",
    ],
  },
  {
    title: "学术论文引用影响预测",
    tech: "Python / XGBoost / scikit-learn / NLP",
    points: [
      "基于约 5 万篇 AI/ML 论文，构建无数据泄漏的时序机器学习流程，融合文本表征、论文元数据、发表渠道（会议/期刊）、作者所属机构，以及作者和参考文献的历史信息；使用 2018-2020 年数据训练，并以 2021-2022 年数据作为独立留出测试集。",
      "基于 Silhouette 指标评估 LSA 文本表征上的 K-Means 聚类方案（k=2-16），并结合 UMAP 和 t-SNE 检查聚类结构；最终选取可解释的 k=8 划分，发现不同研究主题的高影响力论文占比相差 4 倍。",
      "在 Ridge、Random Forest 和 XGBoost 上评估 9 种无数据泄漏的特征组合；最终模型在 10% 的筛选预算内召回了 48.3% 的高影响力论文。",
    ],
    href: "https://github.com/hz1957/Predicting-Citation-Impact-of-Scientific-Papers",
    reportHref:
      "https://hz1957.github.io/Predicting-Citation-Impact-of-Scientific-Papers/progress-documents/final/",
  },
  {
    title: "基于 Adapter 的 NLP 模型高效微调探索",
    tech: "Python / RoBERTa / LoRA / Adapter",
    points: [
      "基于 adapter-transformers 框架（Pfeiffer et al., 2020），在 RoBERTa 模型中引入 LoRA 与瓶颈式 Adapter，实现参数高效微调，模型参数规模减少约 99%。",
      "针对多项文本分类任务进行超参数调优，在保持模型轻量化的同时提升整体性能。",
      "在多个公开数据集上取得具有竞争力的结果：SciCite（Macro F1 = 82.8%）、IMDB（88.3%）、AG News（94.8%），最高带来约 2% 的准确率提升。",
    ],
  },
  {
    title: "生鲜配送管理系统",
    tech: "Java / Spring Boot / Docker",
    points: [
      "从零到一开发生鲜配送管理网站后端系统，基于 Java、Spring Boot、REST API 实现下单、配送、退货等核心业务功能。",
      "使用 UML 类图、时序图等方法进行系统设计，合理划分模块职责，提升系统可维护性与扩展性。",
      "通过 Docker 进行服务容器化部署，支持多实例运行，并结合 Nginx 实现负载均衡与反向代理，以应对高并发场景。",
    ],
    href: "https://github.com/hz1957/Drone-Delivery-Service",
  },
];

const skillGroupsZh: SkillGroup[] = [
  {
    label: "模型后训练与强化学习",
    items: [
      "监督微调（SFT）",
      "LoRA 参数高效微调",
      "GRPO 与 PPO 策略优化",
      "奖励建模",
      "基于执行结果的奖励设计",
      "verl 后训练框架",
    ],
  },
  {
    label: "分布式训练与推理优化",
    items: [
      "基于 PyTorch 的模型训练",
      "DeepSpeed ZeRO-3",
      "FSDP",
      "Ray",
      "vLLM",
      "FlashAttention",
      "激活检查点",
      "GPU 分布式训练与推理性能分析",
    ],
  },
  {
    label: "智能体与大语言模型系统",
    items: [
      "Agentic AI 系统设计与实现（LangGraph、多步骤规划与执行）",
      "LLM 工具调用与编排",
      "MCP",
      "Text-to-SQL",
      "结构化输出",
      "执行反馈驱动的自动修复",
    ],
  },
  {
    label: "系统、数据与工程能力",
    items: [
      "Python",
      "SQL",
      "R",
      "SAS（Macro）",
      "Spark",
      "Java",
      "C++",
      "ETL 数据管道",
      "数据契约（JSON Schema）",
      "Redis",
      "MySQL",
      "NoSQL 数据库",
      "云端部署（Docker、AWS）",
      "自动化测试（Playwright）",
    ],
  },
  {
    label: "产品、交互与智能体能力封装",
    items: [
      "Figma（AI 前端交互原型设计）",
      "企业级 Agent Skills Framework（技能封装与复用）",
    ],
  },
];

const educationZh: Education[] = [
  {
    degree: "计算机科学硕士，GPA 3.8/4.0",
    school: "佐治亚理工学院",
    year: "2023 - 2026",
  },
  {
    degree: "生物统计学硕士",
    school: "北卡罗来纳大学教堂山分校",
    year: "2019 - 2021",
  },
  {
    degree: "生物科学学士，GPA 4.3/5.0",
    school: "南京大学",
    year: "2011 - 2016",
  },
];

const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    hero: {
      tag: "Agentic AI / LLM Systems / Intelligent Data Automation",
      name: "Haoming Zhang",
      role: "AI Research Engineer | Atlanta, GA",
      bio: "AI engineer with master's degrees in Computer Science and Biostatistics, combining machine learning, software development, and statistical modeling. Focused on agentic systems, LLM post-training, and intelligent data automation platforms, with production LLM performance evaluation experience.",
      emailLabel: "Email",
    },
    sections: {
      training: "Profile Highlights",
      trainingTag: "Capability snapshot",
      agents: "LLM Agent Systems",
      experience: "Experience",
      projects: "Selected Projects",
      skills: "Technical Skills",
      research: "Education and Articles",
      degrees: "Degrees",
      articles: "Articles",
    },
    trainingWork: trainingWorkEn,
    agentWork: agentWorkEn,
    experiences: experiencesEn,
    projects: projectsEn,
    skillGroups: skillGroupsEn,
    education: educationEn,
    codeLabel: "Code",
    reportLabel: "Report",
    fullArticleLabel: "Full article (PDF)",
    contactNote: "Open to roles in agentic AI, LLM post-training, and intelligent data automation platforms.",
  },
  zh: {
    hero: {
      tag: "Agentic AI / 大语言模型系统 / 智能数据自动化",
      name: "张昊明",
      role: "AI 工程师｜上海市长宁区",
      bio: "AI 工程师，拥有计算机科学与生物统计学双硕士学位，兼具机器学习、软件开发与统计建模能力；专注于智能体系统、模型后训练与智能数据自动化平台，并具备生产环境大语言模型性能评测经验。",
      emailLabel: "邮箱",
    },
    sections: {
      training: "个人亮点",
      trainingTag: "能力画像",
      agents: "LLM 智能体系统",
      experience: "工作经历",
      projects: "项目经历",
      skills: "技术技能",
      research: "教育背景与文章",
      degrees: "教育背景",
      articles: "文章",
    },
    trainingWork: trainingWorkZh,
    agentWork: agentWorkZh,
    experiences: experiencesZh,
    projects: projectsZh,
    skillGroups: skillGroupsZh,
    education: educationZh,
    codeLabel: "代码",
    reportLabel: "报告",
    fullArticleLabel: "阅读全文（PDF）",
    contactNote: "求职方向：Agentic AI、大语言模型后训练与智能数据自动化平台。",
  },
};

export default function Home() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];

  return (
    <main className="portfolio-page">
      <section className="hero" id="top">
        <div className="hero-inner">
          <span className="hero-tag">{content.hero.tag}</span>
          <h1>{content.hero.name}</h1>
          <p className="hero-role">{content.hero.role}</p>
          <p className="hero-bio">{content.hero.bio}</p>
          <div className="hero-links">
            <a className="hero-link" href="mailto:zhm0044@gmail.com">
              <Mail aria-hidden="true" />
              {content.hero.emailLabel}
            </a>
            <a
              className="hero-link"
              href="https://www.linkedin.com/in/haoming-zhang-3b8795187/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="hero-link"
              href="https://github.com/hz1957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <div className="page-body">
        <section className="cv-section" id="training">
          <h2 className="cv-section-title">
            {content.sections.training}
            <span className="section-tag">{content.sections.trainingTag}</span>
          </h2>
          <div className="cv-entries">
            {content.trainingWork.map((item) => (
              <div className="cv-entry" key={item.title}>
                <div className="cv-entry-meta">{item.title}</div>
                <div className="cv-entry-body">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {content.agentWork.length > 0 && (
          <section className="cv-section" id="agents">
            <h2 className="cv-section-title">{content.sections.agents}</h2>
            <ul className="plain-bullets">
              {content.agentWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="cv-section" id="work">
          <h2 className="cv-section-title">{content.sections.experience}</h2>
          <div className="exp-entries">
            {content.experiences.map((item) => (
              <div className="exp-entry" key={`${item.role}-${item.company}`}>
                <div className="exp-meta">
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-company">
                    {item.company}
                    {item.place ? ` / ${item.place}` : ""}
                  </div>
                  <span className="exp-period">{item.period}</span>
                </div>
                <ul className="exp-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section" id="projects">
          <h2 className="cv-section-title">{content.sections.projects}</h2>
          <div className="project-entries">
            {content.projects.map((project) => (
              <div className="project-entry" key={project.title}>
                <div className="project-name">
                  <span>{project.title}</span>
                  <span className="project-tech">{project.tech}</span>
                  <div className="project-links">
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight aria-hidden="true" />
                        {content.codeLabel}
                      </a>
                    )}
                    {project.reportHref && (
                      <a
                        href={project.reportHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText aria-hidden="true" />
                        {content.reportLabel}
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  {project.detail && <p className="project-detail">{project.detail}</p>}
                  {project.points && (
                    <ul className="project-points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section" id="skills">
          <h2 className="cv-section-title">{content.sections.skills}</h2>
          <div className="skill-entries">
            {content.skillGroups.map((group) => (
              <div className="skill-entry" key={group.label}>
                <div className="skill-label">{group.label}</div>
                <div className="skill-items">{group.items.join(" / ")}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section" id="research">
          <h2 className="cv-section-title">{content.sections.research}</h2>
          <div className="edu-pub-grid">
            <div className="edu-block">
              <h3>{content.sections.degrees}</h3>
              <ul className="edu-list">
                {content.education.map((item) => (
                  <li key={item.degree}>
                    <span className="edu-degree">{item.degree}</span>
                    <span className="edu-school">{item.school}</span>
                    <span className="edu-school">{item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pub-block">
              <h3>{content.sections.articles}</h3>
              <div className="article-list">
                <article className="pub-entry">
                  <p>
                    Household Transmission of SARS-CoV-2 in the United States:
                    Living Density, Viral Load, and Disproportionate Impact on
                    Communities of Color. 2021.
                  </p>
                  <a
                    className="pub-doi"
                    href="https://doi.org/10.17615/x61s-er87"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen aria-hidden="true" />
                    doi:10.17615/x61s-er87
                  </a>
                </article>
                <article className="pub-entry">
                  <p>
                    Degrees of Freedom Estimation in the Meta-analysis of
                    Sensitivity and Specificity in Diagnosis Medicine. 2021.
                  </p>
                  <a
                    className="pub-doi"
                    href={dofPaperHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText aria-hidden="true" />
                    {content.fullArticleLabel}
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="contact-bar" id="contact">
        <p className="contact-note">{content.contactNote}</p>
      </div>
    </main>
  );
}

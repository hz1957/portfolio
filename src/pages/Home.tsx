import { ArrowUpRight, BookOpen, FileText, Github, Linkedin, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { useOutletContext } from "react-router";
import type { Language, LanguageOutletContext } from "../language";

const dofPaperHref = `${import.meta.env.BASE_URL}degrees-of-freedom-estimation.pdf`;

type StarStyle = CSSProperties & Record<`--${string}`, string>;

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
  detail: string;
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
    publications: string;
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

const seeded = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const stars = Array.from({ length: 42 }, (_, index) => {
  const small = index < 24;
  const medium = index >= 24 && index < 36;
  const sizeBase = small ? 1.1 : medium ? 2 : 3.4;
  const sizeRange = small ? 1.3 : medium ? 1.9 : 3.2;
  const alphaBase = small ? 0.28 : medium ? 0.36 : 0.42;
  const alphaRange = small ? 0.38 : medium ? 0.42 : 0.34;
  const duration = small ? 15 + seeded(index + 1) * 18 : medium ? 12 + seeded(index + 2) * 14 : 9 + seeded(index + 3) * 10;
  const twinkle = small ? 2.5 + seeded(index + 4) * 3.6 : medium ? 2 + seeded(index + 5) * 3 : 1.8 + seeded(index + 6) * 2.6;
  const dx = (seeded(index + 7) - 0.5) * (small ? 28 : medium ? 38 : 52);
  const dy = (seeded(index + 8) - 0.5) * (small ? 22 : medium ? 32 : 42);
  const style: StarStyle = {
    "--x": `${seeded(index + 11) * 100}vw`,
    "--y": `${seeded(index + 23) * 100}vh`,
    "--size": `${sizeBase + seeded(index + 31) * sizeRange}px`,
    "--alpha": `${alphaBase + seeded(index + 41) * alphaRange}`,
    "--duration": `${duration}s`,
    "--twinkle": `${twinkle}s`,
    "--delay": `${-seeded(index + 53) * duration}s`,
    "--twinkle-delay": `${-seeded(index + 61) * twinkle}s`,
    "--dx": `${dx}px`,
    "--dy": `${dy}px`,
    "--glow": `${small ? 0 : medium ? 3 + seeded(index + 71) * 4 : 6 + seeded(index + 83) * 8}px`,
  };

  return {
    className: small ? "star star-small" : medium ? "star star-medium" : "star star-large",
    style,
  };
});

const trainingWorkEn: TrainingItem[] = [
  {
    title: "Qwen-Coder SQL specialist",
    detail:
      "LoRA fine tuned a Qwen-Coder SQL model on execution-verified Spider SQL trajectories using DeepSpeed, FlashAttention and activation checkpointing, improving execution accuracy for SQL generation.",
  },
  {
    title: "Trajectory-based RL data pipeline",
    detail:
      "Built a trajectory-based RL pipeline for business ETL tasks, supporting both chain rollouts and multi-branch Tree Search rollouts.",
  },
  {
    title: "Execution-reward GRPO",
    detail:
      "Engineered GRPO post-training in verl with execution-based rewards, comparing reward schemes, KL coefficients, PPO epochs and rollout configurations; Tree Search rollouts improved execution reliability while using fewer rollout resources.",
  },
  {
    title: "Training-system optimization",
    detail:
      "Optimized the verl/Ray/vLLM post-training pipeline through stage-level profiling, reducing Actor-to-vLLM synchronization latency and actor-update overhead while resolving memory bottlenecks.",
  },
];

const agentWorkEn = [
  "Developed an LLM-powered ETL agent that converts natural-language transformation requirements into executable JSON DAGs for a visual drag-and-drop workflow canvas, supporting both pipeline creation and iterative modification.",
  "Architected a LangGraph plan-execute-repair loop with domain-specific tool calling, structured execution feedback and PySpark validation, enabling autonomous correction of invalid SQL and workflow plans.",
  "Designed a hybrid RAG pipeline for enterprise knowledge retrieval with MinerU PDF parsing, Milvus-backed BGE retrieval, BM25 recall, RRF fusion and BGE reranking.",
];

const experiencesEn: Experience[] = [
  {
    role: "AI Research Engineer",
    company: "R2.AI",
    place: "Shanghai",
    period: "June 2025 - May 2026",
    points: [
      "Developed an LLM-powered ETL agent for natural-language to executable JSON DAG generation, supporting workflow creation and iterative modification.",
      "Architected a LangGraph plan-execute-repair loop with domain-specific tool calling, structured execution feedback and PySpark validation.",
      "LoRA fine tuned a Qwen-Coder SQL model on execution-verified Spider SQL trajectories, improving execution accuracy for SQL generation.",
      "Built trajectory-based RL for business ETL tasks, including chain and multi-branch Tree Search rollouts.",
      "Engineered GRPO post-training in verl with execution-based rewards and Tree Search rollouts.",
      "Optimized verl/Ray/vLLM training stages, reducing Actor-to-vLLM synchronization latency and actor-update overhead.",
      "Designed a hybrid RAG pipeline with MinerU, Milvus-backed BGE retrieval, BM25 recall, RRF fusion and BGE reranking.",
    ],
  },
  {
    role: "Biostatistician",
    company: "Parexel",
    place: "Durham, NC",
    period: "July 2021 - Feb 2025",
    points: [
      "Conducted statistical modeling for oncology clinical trials, building Cox regression, Kaplan-Meier and propensity-score models for large trial cohorts.",
      "Designed hypothesis testing, linear and generalized linear mixed-effects models, and ANCOVA for neurological clinical trial endpoints.",
      "Integrated electronic medical records, lab tests and follow-up logs using SQL and R to assess treatment efficacy and safety.",
      "Developed SQL, R and SAS programs for analysis and visualization, producing regulatory-quality deliverables.",
      "Authored and reviewed Statistical Analysis Plans while maintaining SDTM and ADaM data standards.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "UNC",
    place: "Chapel Hill, NC",
    period: "Jan 2021 - May 2021",
    points: [
      "Analyzed SARS-CoV-2 household transmission risk factors across a North Carolina cohort.",
      "R data processing, ggplot2 visualizations, mixed-model and ICC analyses.",
    ],
  },
];

const projectsEn: Project[] = [
  {
    title: "SQL Agent Post-Training",
    tech: "SFT / GRPO / DeepSpeed / vLLM",
    detail:
      "Open-source post-training project for SQL/DAG generation: execution-verified SFT data, trajectory-based RL, GRPO reward experiments, and system profiling around DeepSpeed, verl/Ray and vLLM.",
    href: "https://github.com/hz1957/sql_agent_training",
    reportHref: "https://hz1957.github.io/sql_agent_training/",
  },
  {
    title: "Predicting Citation Impact of Scientific Papers",
    tech: "Python / NLP / ML",
    detail:
      "Prediction pipeline for estimating scientific paper citation impact from paper-derived signals, with a final report covering data processing, modeling and evaluation.",
    href: "https://github.com/hz1957/Predicting-Citation-Impact-of-Scientific-Papers",
    reportHref:
      "https://hz1957.github.io/Predicting-Citation-Impact-of-Scientific-Papers/progress-documents/final/",
  },
  {
    title: "Human Retina Cell Clustering",
    tech: "R / Unsupervised ML",
    detail:
      "Applied t-SNE/K-means, CCA+Seurat and SAME clustering to classify retinal cell types from scRNA-seq data, validating results with Random Forest and matching benchmark performance.",
    href: "https://github.com/hz1957/Human-retina-cellular-landscape-clustering",
  },
  {
    title: "Degrees-of-Freedom Approximation Comparison",
    tech: "SAS",
    detail:
      "Built a SAS macro and grid search to compare Kenward-Roger and Between-Within approximations across cluster sizes, improving predictive accuracy in a mixed-effects logistic regression meta-analysis context.",
  },
  {
    title: "Fresh Produce Delivery Management System",
    tech: "Java / Spring Boot / Docker",
    detail:
      "Built a delivery management backend from scratch using Java, Spring Boot and REST APIs for order placement, delivery tracking and returns; containerized with Docker and configured Nginx as a load balancer for high-concurrency traffic.",
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
    ],
  },
  {
    label: "Agentic & Retrieval Systems",
    items: ["LangGraph", "Tool Calling", "MCP", "Text-to-SQL", "RAG", "Milvus", "BM25"],
  },
  {
    label: "Programming, Data & Infrastructure",
    items: ["Python", "SQL", "PySpark", "Docker", "AWS", "MySQL", "Redis", "Nginx"],
  },
  {
    label: "Statistical Computing & Software Development",
    items: ["R", "SAS", "Java", "Spring Boot"],
  },
];

const educationEn: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "Georgia Institute of Technology",
    year: "Aug 2023 - Aug 2026",
  },
  {
    degree: "M.S. Biostatistics",
    school: "University of North Carolina at Chapel Hill",
    year: "Aug 2019 - May 2021",
  },
  {
    degree: "B.S. Biological Science",
    school: "Nanjing University",
    year: "Sept 2016",
  },
];

const trainingWorkZh: TrainingItem[] = [
  {
    title: "Qwen-Coder SQL 专项模型",
    detail:
      "使用 LoRA 在 4×H100 和 4×H200 节点上微调 Qwen2.5-Coder-14B，训练数据采用经执行验证的 Spider SQL 轨迹；结合 DeepSpeed ZeRO-3、FlashAttention 和激活检查点，将执行准确率从 68% 提升至 80%。",
  },
  {
    title: "基于轨迹的强化学习流程",
    detail:
      "搭建面向业务 ETL 任务、基于轨迹的强化学习流程，支持链式 rollout 和多分支 Tree Search rollout。",
  },
  {
    title: "执行奖励驱动的 GRPO",
    detail:
      "在 verl 中实现以执行结果为奖励信号的 GRPO 后训练。围绕奖励方案、KL 系数、PPO epoch 和 rollout 配置，在 4×H100 上设计对照实验；Tree GRPO 的执行准确率达到 84%，链式 n=8 方案在减少 60% rollout 槽位的情况下达到 83.33%。",
  },
  {
    title: "训练系统优化",
    detail:
      "通过分阶段性能剖析优化 verl/Ray/vLLM 训练流程，缩短 Actor-to-vLLM 和 actor-update 延迟，并解决内存瓶颈问题。",
  },
];

const agentWorkZh = [
  "开发基于 LLM 的 ETL 智能体，将自然语言描述的数据转换需求转化为可执行的 JSON DAG，供可视化拖拽式工作流画布使用，并支持管线创建与迭代修改。",
  "设计并实现基于 LangGraph 的 plan-execute-repair 闭环，结合领域专用工具调用、结构化执行反馈和 PySpark 验证，使系统能够自主修正无效 SQL 和工作流方案。",
  "设计面向企业知识检索的混合 RAG 流程，集成 MinerU PDF 解析、基于 Milvus 的 BGE 检索、BM25 召回、RRF 融合及 BGE 重排序。",
];

const experiencesZh: Experience[] = [
  {
    role: "AI 研究员",
    company: "R2.AI",
    place: "上海",
    period: "2025 年 6 月 - 2026 年 5 月",
    points: [
      "开发基于 LLM 的 ETL 智能体，将自然语言需求转换为可执行的 JSON DAG，支持工作流创建与迭代修改。",
      "基于 LangGraph 构建 plan-execute-repair 闭环，结合领域专用工具调用、结构化执行反馈与 PySpark 验证。",
      "使用 LoRA 在经执行验证的 Spider SQL 轨迹上微调 Qwen-Coder SQL 模型，提升 SQL 生成的执行准确性。",
      "搭建面向业务 ETL 任务、基于轨迹的强化学习流程，支持链式 rollout 和多分支 Tree Search rollout。",
      "在 verl 中实现基于执行奖励和 Tree Search rollout 的 GRPO 后训练。",
      "优化 verl/Ray/vLLM 训练阶段，缩短 Actor-to-vLLM 同步延迟和 actor-update 开销。",
      "设计面向企业知识检索的混合 RAG 流程，集成 MinerU PDF 解析、基于 Milvus 的 BGE 检索、BM25 召回、RRF 融合及 BGE 重排序。",
    ],
  },
  {
    role: "生物统计师",
    company: "Parexel",
    place: "美国北卡罗来纳州达勒姆",
    period: "2021 年 7 月 - 2025 年 2 月",
    points: [
      "为肿瘤临床试验开展统计建模，为超过 2,000 名患者构建并维护生存模型（Cox 回归、Kaplan-Meier）和混合效应模型，并处理缺失数据，以支持疗效评估和风险预测。",
      "针对神经系统临床试验，设计并实施假设检验、线性及广义线性混合效应模型和 ANCOVA，分析认知评分变化并为剂量调整提供依据。",
      "使用 SQL 和 R 整合电子病历、实验室检测及随访记录等大规模数据，开展多数据源的疗效和安全性评估。",
      "开发 SQL、R 和 SAS 程序，完成数据分析与可视化，并产出高质量交付成果。",
      "编写并审核统计分析计划（SAP），维护 SDTM 和 ADaM 数据标准。",
    ],
  },
  {
    role: "研究助理",
    company: "北卡罗来纳大学教堂山分校",
    place: "美国北卡罗来纳州教堂山",
    period: "2021 年 1 月 - 2021 年 5 月",
    points: [
      "分析北卡罗来纳州 SARS-CoV-2 家庭传播的风险因素（约 500 名参与者）。",
      "使用 R 完成数据处理和统计分析（混合模型、ICC），并通过 ggplot2 进行可视化。",
    ],
  },
];

const projectsZh: Project[] = [
  {
    title: "SQL 智能体后训练",
    tech: "SFT / GRPO / DeepSpeed / vLLM",
    detail:
      "面向 SQL/DAG 生成的开源后训练项目，涵盖经执行验证的 SFT 数据、基于轨迹的强化学习、GRPO 奖励实验，以及围绕 DeepSpeed、verl/Ray 和 vLLM 的系统性能分析。",
    href: "https://github.com/hz1957/sql_agent_training",
    reportHref: "https://hz1957.github.io/sql_agent_training/",
  },
  {
    title: "学术论文引用影响预测",
    tech: "Python / XGBoost / scikit-learn / NLP",
    detail:
      "基于约 5 万篇 AI/ML 论文构建无数据泄漏的时序机器学习流程，融合文本、元数据、发表渠道、机构及历史信息；最终模型在 10% 的筛选预算内召回了 48.3% 的高影响力论文。",
    href: "https://github.com/hz1957/Predicting-Citation-Impact-of-Scientific-Papers",
    reportHref:
      "https://hz1957.github.io/Predicting-Citation-Impact-of-Scientific-Papers/progress-documents/final/",
  },
  {
    title: "人类视网膜细胞聚类",
    tech: "R / 无监督学习",
    detail:
      "使用 t-SNE/K-means、CCA+Seurat 和 SAME 对单细胞 RNA 测序数据中的视网膜细胞类型进行聚类，并通过 Random Forest 验证结果，达到与基准研究相当的表现。",
    href: "https://github.com/hz1957/Human-retina-cellular-landscape-clustering",
  },
  {
    title: "混合效应逻辑回归的自由度近似方法比较",
    tech: "SAS",
    detail:
      "开发 SAS 宏并进行网格搜索，比较 Kenward-Roger 与 Between-Within 自由度近似方法在不同聚类规模下的表现，从而提高元分析场景中的预测准确性。",
  },
  {
    title: "生鲜配送管理系统",
    tech: "Java / Spring Boot / Docker",
    detail:
      "使用 Java、Spring Boot 和 REST API 从零搭建配送管理后端，实现下单、配送跟踪和退货处理；通过 Docker 进行容器化，并配置 Nginx 作为负载均衡器和反向代理，以支持高并发流量。",
    href: "https://github.com/hz1957/Drone-Delivery-Service",
  },
];

const skillGroupsZh: SkillGroup[] = [
  {
    label: "LLM 后训练与强化学习",
    items: ["SFT", "LoRA", "GRPO", "PPO", "Reward Modeling", "Execution-Based Rewards", "verl"],
  },
  {
    label: "分布式训练与推理",
    items: [
      "PyTorch",
      "DeepSpeed ZeRO-3",
      "FSDP",
      "Ray",
      "vLLM",
      "FlashAttention",
      "Activation Checkpointing",
    ],
  },
  {
    label: "智能体与检索系统",
    items: ["LangGraph", "Tool Calling", "MCP", "Text-to-SQL", "RAG", "Milvus", "BM25"],
  },
  {
    label: "编程、数据与基础设施",
    items: ["Python", "SQL", "PySpark", "Docker", "AWS", "MySQL", "Redis", "Nginx"],
  },
  {
    label: "统计计算与软件开发",
    items: ["R", "SAS", "Java", "Spring Boot"],
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
      tag: "SFT / GRPO / Agentic Systems",
      name: "Haoming Zhang",
      role: "AI Research Engineer | Atlanta, GA",
      bio: "AI engineer with master's degrees in Computer Science and Biostatistics, specializing in LLM post-training and agentic systems, with hands-on experience across the full agent lifecycle: RL data pipelines and reward modeling, execution-guided optimization and deployment. Brings a strong quantitative foundation from a prior statistics career (4 years designing statistical analysis and survival models for FDA-regulated clinical trials), now applied to evaluation, experimental design, SFT and RL for LLM agents.",
      emailLabel: "Email",
    },
    sections: {
      training: "SFT and RL for SQL Generation",
      trainingTag: "Main thread",
      agents: "LLM Agent Systems",
      experience: "Experience",
      projects: "Selected Projects",
      skills: "Technical Skills",
      research: "Education and Publications",
      degrees: "Degrees",
      publications: "Publications",
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
    contactNote: "Open to roles in LLM post-training, agentic AI, and evaluation-heavy model systems.",
  },
  zh: {
    hero: {
      tag: "SFT / GRPO / 智能体系统",
      name: "张昊明",
      role: "AI 研究员｜美国佐治亚州亚特兰大",
      bio: "AI 研究员，拥有计算机科学与统计学双硕士学位，专注于大语言模型后训练与智能体系统，具备覆盖智能体全生命周期的实战经验，涵盖强化学习数据流程、奖励建模、执行反馈引导的优化及部署。拥有扎实的定量分析基础，曾从事 4 年统计工作，负责 FDA 监管临床试验的统计分析与生存模型设计；目前将这一背景应用于 LLM 智能体的评估、实验设计、监督微调和强化学习。",
      emailLabel: "邮箱",
    },
    sections: {
      training: "面向 SQL 生成的监督微调与强化学习",
      trainingTag: "核心方向",
      agents: "LLM 智能体系统",
      experience: "工作经历",
      projects: "项目经历",
      skills: "技术技能",
      research: "教育背景与发表论文",
      degrees: "教育背景",
      publications: "发表论文",
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
    contactNote: "求职方向：大语言模型后训练、智能体 AI 与重视评估的模型系统。",
  },
};

export default function Home() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];

  return (
    <main className="portfolio-page">
      <div className="space-field" aria-hidden="true">
        {stars.map((star, index) => (
          <span className={star.className} style={star.style} key={index} />
        ))}
      </div>

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

        <section className="cv-section" id="agents">
          <h2 className="cv-section-title">{content.sections.agents}</h2>
          <ul className="plain-bullets">
            {content.agentWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cv-section" id="work">
          <h2 className="cv-section-title">{content.sections.experience}</h2>
          <div className="exp-entries">
            {content.experiences.map((item) => (
              <div className="exp-entry" key={`${item.role}-${item.company}`}>
                <div className="exp-meta">
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-company">
                    {item.company} / {item.place}
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
                <p className="project-detail">{project.detail}</p>
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
              <h3>{content.sections.publications}</h3>
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

import { ArrowUpRight, BookOpen, FileText, Github, Linkedin, Mail } from "lucide-react";
import type { CSSProperties } from "react";

type StarStyle = CSSProperties & Record<`--${string}`, string>;

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

const trainingWork = [
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

const agentWork = [
  "Developed an LLM-powered ETL agent that converts natural-language transformation requirements into executable JSON DAGs for a visual drag-and-drop workflow canvas, supporting both pipeline creation and iterative modification.",
  "Architected a LangGraph plan-execute-repair loop with domain-specific tool calling, structured execution feedback and PySpark validation, enabling autonomous correction of invalid SQL and workflow plans.",
  "Designed a hybrid RAG pipeline for enterprise knowledge retrieval with MinerU PDF parsing, Milvus-backed BGE retrieval, BM25 recall, RRF fusion and BGE reranking.",
];

const experiences = [
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

const projects = [
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

const skillGroups = [
  {
    label: "Core",
    items: ["Python", "SQL", "PyTorch", "LangGraph", "DeepSpeed", "vLLM"],
  },
  {
    label: "Post-training and RL",
    items: ["SFT", "GRPO", "PPO", "Reward Modeling", "FSDP", "Distributed Training"],
  },
  {
    label: "Agentic AI and LLM systems",
    items: ["Tool Calling", "RAG", "MCP", "Text-to-SQL"],
  },
  {
    label: "Also familiar with",
    items: ["R", "Java", "SAS", "Docker", "Nginx", "MySQL", "Redis", "AWS", "ETL Pipelines"],
  },
];

const education = [
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

export default function Home() {
  return (
    <main className="portfolio-page">
      <div className="space-field" aria-hidden="true">
        {stars.map((star, index) => (
          <span className={star.className} style={star.style} key={index} />
        ))}
      </div>

      <section className="hero" id="top">
        <div className="hero-inner">
          <span className="hero-tag">SFT / GRPO / Agentic Systems</span>
          <h1>Haoming Zhang</h1>
          <p className="hero-role">AI Research Engineer | Atlanta, GA</p>
          <p className="hero-bio">
            AI engineer specializing in LLM post-training and agentic systems,
            with hands-on experience across the full agent lifecycle: RL data
            pipelines, reward modeling, execution-guided optimization and
            deployment-facing reliability. I bring four years of statistical
            modeling experience from FDA-regulated clinical trials to
            evaluation, experimental design and RL for LLM agents while
            completing an M.S. in Computer Science at Georgia Tech.
          </p>
          <div className="hero-links">
            <a className="hero-link" href="mailto:zhm0044@gmail.com">
              <Mail aria-hidden="true" />
              Email
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
            SFT and RL for SQL Generation
            <span className="section-tag">Main thread</span>
          </h2>
          <div className="cv-entries">
            {trainingWork.map((item) => (
              <div className="cv-entry" key={item.title}>
                <div className="cv-entry-meta">{item.title}</div>
                <div className="cv-entry-body">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section" id="agents">
          <h2 className="cv-section-title">LLM Agent Systems</h2>
          <ul className="plain-bullets">
            {agentWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cv-section" id="work">
          <h2 className="cv-section-title">Experience</h2>
          <div className="exp-entries">
            {experiences.map((item) => (
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
          <h2 className="cv-section-title">Selected Projects</h2>
          <div className="project-entries">
            {projects.map((project) => (
              <div className="project-entry" key={project.title}>
                <div className="project-name">
                  <span>{project.title}</span>
                  <span className="project-tech">{project.tech}</span>
                  <div className="project-links">
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight aria-hidden="true" />
                        Code
                      </a>
                    )}
                    {project.reportHref && (
                      <a
                        href={project.reportHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText aria-hidden="true" />
                        Report
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
          <h2 className="cv-section-title">Technical Skills</h2>
          <div className="skill-entries">
            {skillGroups.map((group) => (
              <div className="skill-entry" key={group.label}>
                <div className="skill-label">{group.label}</div>
                <div className="skill-items">{group.items.join(" / ")}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section" id="research">
          <h2 className="cv-section-title">Education and Publication</h2>
          <div className="edu-pub-grid">
            <div className="edu-block">
              <h3>Degrees</h3>
              <ul className="edu-list">
                {education.map((item) => (
                  <li key={item.degree}>
                    <span className="edu-degree">{item.degree}</span>
                    <span className="edu-school">{item.school}</span>
                    <span className="edu-school">{item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pub-block">
              <h3>Publication</h3>
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
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="contact-bar" id="contact">
        <p className="contact-note">
          Open to roles in LLM post-training, agentic AI, and evaluation-heavy model systems.
        </p>
      </div>
    </main>
  );
}

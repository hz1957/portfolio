import { ArrowUpRight, BookOpen, FileText, Linkedin, Mail } from "lucide-react";
import type { CSSProperties } from "react";

const dofPaperHref = `${import.meta.env.BASE_URL}degrees-of-freedom-estimation.pdf`;

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
      "Fine-tuned a 7B Qwen-Coder SQL specialist with SFT on Spider gold SQL tasks, improving offline SQL rewrite accuracy from 68% to 80% for SQL Script generation.",
  },
  {
    title: "Trajectory-based RL data pipeline",
    detail:
      "Built a trajectory-based RL data pipeline from 250 business ETL tasks with 4 rollouts each, using human-labeled end-to-end DAG correctness rewards.",
  },
  {
    title: "GRPO-style post-training",
    detail:
      "Engineered GRPO-style post-training with group-relative rewards and discounted return propagation to SQL Script node actions, improving held-out end-to-end workflow success from 72.5% to 77.5% on 80 manually evaluated business tasks.",
  },
  {
    title: "Inference and reliability evaluation",
    detail:
      "Benchmarked TTFT, latency, throughput, prefix-cache reuse and tool-call reliability with JSON Schema constrained decoding.",
  },
];

const agentWork = [
  "LLM-powered ETL agent converting natural-language requirements into executable JSON DAGs for a visual workflow canvas.",
  "LangGraph plan-execute-repair loop with domain-specific tool calling, structured execution feedback, PySpark validation and automatic replanning.",
  "Hybrid RAG pipeline with MinerU PDF parsing, Milvus-backed BGE retrieval, BM25 recall, RRF fusion and reranking.",
];

const experiences = [
  {
    role: "AI Research Engineer",
    company: "R2.AI",
    place: "Shanghai",
    period: "June 2025 - May 2026",
    points: [
      "LLM-powered ETL agent for natural-language to executable JSON DAG generation.",
      "LangGraph plan-execute-repair loop with domain-specific tool calling, PySpark validation and automatic replanning.",
      "SFT/RL post-training and reliability evaluation for Qwen-Coder SQL generation.",
      "Hybrid RAG knowledge pipeline with MinerU, Milvus, BGE retrieval/reranking, BM25 recall and RRF fusion.",
    ],
  },
  {
    role: "Biostatistician",
    company: "Parexel",
    place: "Durham, NC",
    period: "July 2021 - Feb 2025",
    points: [
      "Survival models, causal inference and missing-data workflows for oncology trials covering 2,000+ patients.",
      "Mixed-effects models, ANCOVA and hypothesis testing for neurological clinical trial endpoints.",
      "SQL, R and SAS programs for regulatory-quality analysis deliverables under SDTM/ADaM standards.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    company: "UNC Chapel Hill",
    place: "Chapel Hill, NC",
    period: "Jan 2021 - May 2021",
    points: [
      "Analyzed SARS-CoV-2 household transmission risk factors across roughly 500 participants in North Carolina.",
      "R data processing, ggplot2 visualizations, mixed-model and ICC analyses.",
    ],
  },
];

const projects = [
  {
    title: "SQL Agent Training Framework",
    tech: "Python / PyTorch / GRPO",
    detail:
      "Research codebase for trajectory-based RL training on SQL/DAG generation tasks; group-relative rewards and discounted return propagation to node actions.",
    href: "https://github.com/hz1957/sql_agent_training",
  },
  {
    title: "Human retina cell clustering",
    tech: "R / ML",
    detail:
      "Unsupervised scRNA-seq clustering with t-SNE + K-means, CCA + Seurat and SAME; Random Forest validation; ARI 0.967 vs. Menon et al. (2019).",
    href: "https://github.com/hz1957/Human-retina-cellular-landscape-clustering",
  },
  {
    title: "DoF approximations in joint mixed-effect logistic regression",
    tech: "SAS",
    detail:
      "SAS macro for meta-analysis settings; grid search evaluating Kenward-Roger and Between-Within approximations under varying cluster sizes.",
  },
  {
    title: "Drone Delivery Service",
    tech: "Java / Spring Boot",
    detail:
      "REST backend for order placement, delivery tracking and returns; Docker multi-instance deployment with Nginx reverse proxying.",
    href: "https://github.com/hz1957/Drone-Delivery-Service",
  },
];

const skillGroups = [
  {
    label: "SFT and RL",
    items: ["SFT", "RL", "GRPO", "PPO", "Reward Modeling"],
  },
  {
    label: "LLM systems",
    items: ["LangGraph", "Tool Calling", "Agentic RAG", "MCP", "Text-to-SQL"],
  },
  {
    label: "Deep learning",
    items: ["PyTorch", "TensorFlow", "SGLang", "vLLM", "Transformers"],
  },
  {
    label: "Engineering and statistics",
    items: ["Python", "SQL", "R", "Java", "SAS", "Docker", "MySQL", "Redis", "AWS"],
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Georgia Institute of Technology",
    year: "Aug 2026",
  },
  {
    degree: "M.S. Biostatistics",
    school: "University of North Carolina at Chapel Hill",
    year: "May 2021",
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
          <span className="hero-tag">SFT / RL / LLM Systems</span>
          <h1>Haoming Zhang</h1>
          <p className="hero-role">AI Research Engineer</p>
          <p className="hero-bio">
            AI engineer specializing in LLM post-training and agentic systems.
            I work across the agent lifecycle: RL data pipelines, reward
            modeling, execution-guided SQL/DAG optimization, inference
            profiling, and deployment-facing reliability. My background in
            statistical modeling and clinical-trial analytics helps me evaluate
            model behavior carefully: reading metrics, defining failure cases,
            and avoiding overclaiming.
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
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.title}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                  <span className="project-tech">{project.tech}</span>
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
          <h2 className="cv-section-title">Education and Articles</h2>
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
              <h3>Articles</h3>
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
                    Full article (PDF)
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="contact-bar" id="contact">
        <p className="contact-note">
          Open to roles in model training, LLM systems, and data automation.
        </p>
      </div>
    </main>
  );
}

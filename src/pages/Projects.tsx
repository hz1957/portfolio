import {
  Github,
  Code2,
  Database,
  Brain,
  Sparkles,
} from "lucide-react";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { FeaturedProjectCard } from "../components/FeaturedProjectCard";

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Projects</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          AI-powered solutions spanning intelligent agents, data
          platforms, and analytical systems
        </p>
      </div>

      {/* Featured Project - Model Platform */}
      <Section
        icon={<Sparkles className="w-6 h-6" />}
        title="Featured Project"
      >
        <FeaturedProjectCard
          title="Agentic Data Analysis"
          subtitle="Enterprise AI Data Analysis Platform"
          description="An enterprise-grade data analysis and processing platform that deeply integrates Large Language Models with traditional data engineering. The platform provides intelligent Text-to-SQL Q&A and Text-to-ETL automation capabilities with drag-and-drop operator configuration (similar to Dify), offering a Figma Make-like interface where users can edit or chat."
          features={[
            {
              title:
                "1. Agentic ETL Orchestration Engine (LangGraph, Multi-agent System)",
              items: [
                'Architecture Design: Built on LangGraph with a "Planner-Builder-Toolkit" layered architecture for intelligent agent systems',
                "Multi-turn Reasoning: Implemented ReAct-based multi-turn planning (up to 30 iterations) to decompose complex natural language requirements into DAG structures with data filtering, column transformations, and multi-table joins",
                "Stability Optimization: Introduced Watchdog mechanism to monitor DAG convergence, ensuring logical closure and executability; utilized dynamic System Prompt injection of current DAG state (Nodes & Aliases) to enhance model context awareness while saving tokens",
              ],
            },
            {
              title:
                "2. Enterprise Text-to-SQL System (RAG, Domain Adaptation)",
              items: [
                "Semantic Router: Designed a domain knowledge-based (CDISC/SDTM standards) Router module to handle schema explosion in enterprise databases, accurately retrieving relevant table structures based on user intent and conversation history, significantly improving SQL generation accuracy and reducing token consumption",
                "Context Awareness: Implemented full-chain context management where Router analyzes complete conversation history, enabling handling of complex context-dependent instructions like 'add filter conditions' or 'modify join tables'",
                "Robustness Engineering: Resolved UTF8MB4 encoding issues in multilingual (Chinese/special characters) environments and implemented regex-based automated error correction and formatting for medical terminology",
              ],
            },
            {
              title:
                "3. Full-stack Interaction & State Management (WebSocket)",
              items: [
                "Immersive Interaction: Developed React + WebSocket streaming conversation interface with ChatGPT-like typewriter effects",
                "Session Rollback (Time-travel): Innovatively implemented conversation rollback feature allowing users to reset to any historical node, with automatic cascading deletion of related intermediate Artifacts (ETL plans, table selections), greatly enhancing fault tolerance in complex task planning",
                "Visual Feedback: Integrated ECharts auto-chart generation and Table Cards real-time feedback within conversation flow, improving system interpretability",
              ],
            },
          ]}
          techStack={[
            "Agentic AI",
            "Post Training",
            "Python",
            "FastAPI",
            "LangChain",
            "LangGraph",
            "DeepSeek",
            "MySQL",
            "Neo4j",
            "Redis",
            "React",
            "WebSocket",
            "Docker",
          ]}
          isPrivate={true}
        />
      </Section>

      {/* GitHub Projects */}
      <Section
        icon={<Code2 className="w-6 h-6" />}
        title="Open Source Projects"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="PV Mapping System"
            description="Pharmacovigilance data mapping system for drug safety monitoring and adverse event reporting"
            tags={[
              "React",
              "TypeScript",
              "Python",
              "MySQL",
              "LLM",
            ]}
            githubUrl="https://github.com/hz1957/PV-Mapping-System"
          />
          <ProjectCard
            title="Human Retina Cellular Landscape Clustering"
            description="Advanced clustering analysis of human retina cellular data using machine learning techniques"
            tags={[
              "Bioinformatics",
              "Machine Learning",
              "Data Analysis",
            ]}
            githubUrl="https://github.com/hz1957/Human-retina-cellular-landscape-clustering"
          />
          <ProjectCard
            title="Drone Delivery Service"
            description="Automated drone delivery system with route optimization and real-time tracking capabilities"
            tags={["Logistics", "Automation", "Optimization"]}
            githubUrl="https://github.com/hz1957/Drone-Delivery-Service"
          />
          <ProjectCard
            title="Car Sales Web Application"
            description="Full-stack web application for managing car sales inventory and customer transactions"
            tags={[
              "Web Development",
              "Full-Stack",
              "E-Commerce",
            ]}
            githubUrl="https://github.com/hz1957/Car-Sales-Web-Application"
          />
        </div>
      </Section>

      {/* Technical Expertise Areas */}
      <Section
        icon={<Brain className="w-6 h-6" />}
        title="Technical Expertise"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4 shadow-md">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-3">LLM & AI Agents</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Building intelligent multi-agent systems with
              LangGraph, implementing ReAct reasoning, semantic
              routing, and RAG architectures for enterprise
              applications.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4 shadow-md">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-3">
              Full-Stack Development
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Developing scalable web applications with React,
              TypeScript, FastAPI, and WebSocket for real-time
              streaming and interactive user experiences.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4 shadow-md">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl mb-3">Data Engineering</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Designing ETL pipelines, Text-to-SQL systems, and
              database architectures (MySQL, Neo4j, Redis) for
              complex data transformation workflows.
            </p>
          </div>
        </div>
      </Section>

      {/* GitHub CTA */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-center shadow-xl">
        <Github className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl text-white mb-4">
          Explore More on GitHub
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Visit my GitHub profile to see more projects,
          contributions, and open-source work. All my public
          code is available for review and collaboration.
        </p>
        <a
          href="https://github.com/hz1957"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Github className="w-5 h-5" />
          View GitHub Profile
        </a>
      </div>
    </main>
  );
}
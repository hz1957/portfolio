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
          title="Multi-Agent Data Pipeline Platform"
          subtitle="Chat-Based Visual Data Transformation with Agentic JSON Pipeline Generation"
          description="A chat-based visual data transformation system where users describe workflows in natural language and an LLM agent generates structured JSON pipelines for a front-end drag-and-drop canvas. The system uses a two-agent workflow: a conversational orchestrator for multi-turn intent understanding and session state management, and a pipeline-generation agent for producing and revising executable workflow JSON."
          features={[
            {
              title: "1. Conversational Pipeline Generation",
              items: [
                "Natural Language to Workflow JSON: Users describe data transformation goals in chat, and the agent converts intent into structured pipeline JSON for a visual drag-and-drop canvas",
                "Two-Agent Workflow: Conversational orchestrator manages multi-turn intent understanding and session state, while the pipeline-generation agent produces and revises executable workflow JSON",
                "Stateful Revision Flow: Prior workflow state, user refinements, and execution feedback are passed as scoped context so the system can update existing pipelines rather than regenerate from scratch",
              ],
            },
            {
              title: "2. Tool-Call Loop with Self-Correction",
              items: [
                "Intent-Specific Tool Selection: The agent selects tools based on the requested operation, separating node-level edits, structure changes, and new pipeline generation paths",
                "Structured Execution Feedback: Tool results and validation errors are returned in a machine-readable format so the agent can diagnose failed or invalid pipeline steps",
                "Repair-Oriented Iteration: Self-correction logic revises invalid steps and falls back to broader replanning when incremental repair cannot converge",
              ],
            },
            {
              title: "3. Agent Memory & Tiered RAG",
              items: [
                "Tiered Context System: Combines short-term conversation history, LLM-scored long-term memory, and structured domain knowledge for workflow-aware generation",
                "MCP-Wrapped Traditional RAG: Fast retrieval path for common context needs, exposed through MCP tools that the agent can call during planning",
                "Agentic RAG Fallback: When retrieved context is insufficient, the agent performs progressive multi-hop skill document search before finalizing a pipeline",
              ],
            },
            {
              title: "4. Post-Training & Inference Reliability",
              items: [
                "GRPO Prototype: Prototyped GRPO-style post-training for Qwen Coder 1.5B with AgentLightning to improve self-correcting SQL generation for Spark-executable transformations",
                "Structured Output Determinism: Used JSON Schema constrained decoding and downstream validation to keep generated workflow JSON compatible with the execution layer",
                "Inference Profiling: Measured TTFT, end-to-end latency, token throughput, and cache-reuse effects across varying concurrency and shared-prefix patterns",
              ],
            },
          ]}
          techStack={[
            "Multi-Agent",
            "Tool Calling",
            "JSON Schema",
            "GRPO",
            "Agentic RAG",
            "MCP",
            "Qwen Coder",
            "Python",
            "FastAPI",
            "Spark SQL",
            "MySQL",
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
            title="Clinical Data Mapping System"
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
              structured tool calling, ReAct reasoning, semantic
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

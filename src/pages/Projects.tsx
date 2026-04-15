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
          subtitle="Conversational ETL & SQL Generation with Agentic Orchestration"
          description="A production dual-agent system where a conversational orchestrator routes multi-turn user intent and manages session state, while a LangGraph-based execution specialist generates and modifies data transformation pipelines via structured tool calls. Includes tiered agent memory (LLM-as-judge long-term memory + Agentic RAG via MCP tools) and a GRPO fine-tuned Qwen Coder 1.5B for self-correcting SQL generation."
          features={[
            {
              title: "1. Multi-Agent Architecture & Stateful Orchestration",
              items: [
                "Role Separation: Conversational orchestrator handles multi-turn intent classification (CHITCHAT / DATA_EXPERT / PLAN_RECALL / REFINEMENT / NEW_REQUEST), session state management, and remote production-state bootstrapping — keeping context continuity without user re-prompting",
                "Execution Specialist: LangGraph-based ETL agent receives scoped payloads (refined instruction, relevant tables, prior plan) and generates or modifies pipelines via structured tool calls",
                "Context Integrity: Execution-time data contracts via scoped artifact passing prevent stale context from polluting downstream planning; semantic alignment with remote production state on every run",
              ],
            },
            {
              title: "2. Tool-Call Agentic Planning with Self-Correction",
              items: [
                "Intent-Classified Tool Scoping: Modification intent classifier routes between PURE_MODIFICATION (node-level updates) and STRUCTURE_CHANGE (DAG rewiring), selecting the appropriate tool set for each mode",
                "Feedback-Driven Iteration: Agent applies incremental changes via tool calls, receives structured execution feedback, and converges toward a valid plan — with Soft/Hard Watchdogs enforcing DAG convergence",
                "Graceful Degradation: Automatic full-replan fallback (Replan) and NoOp fallback when modification produces no valid change — ensuring the system never silently produces inconsistent output",
              ],
            },
            {
              title: "3. Agent Memory & Tiered RAG",
              items: [
                "Three-Tier Context: Full short-term windowed history + LLM-as-judge long-term memory (written to persistent skill files, retrieved via one-shot RAG) + domain knowledge corpus",
                "MCP-Wrapped Traditional RAG: Fast retrieval path using BM25 + vector similarity + reranker, exposed as MCP tools callable by the agent",
                "Agentic RAG Fallback: When traditional RAG is insufficient, the agent self-generates search queries, calls retrieval tools (Grep, file scan, terminal), and iterates in a ReAct loop until context sufficiency is confirmed",
              ],
            },
          ]}
          techStack={[
            "Multi-Agent",
            "LangGraph",
            "RLHF / GRPO",
            "Agentic RAG",
            "MCP",
            "Python",
            "FastAPI",
            "SGLang",
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
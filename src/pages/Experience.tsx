import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
} from "lucide-react";
import { Section } from "../components/Section";
import { ExperienceCard } from "../components/ExperienceCard";

export default function Experience() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl">My Journey</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A combination of rigorous academic training and
          professional experience in AI development and
          biostatistics
        </p>
      </div>

      {/* Work Experience Section */}
      <Section
        icon={<Briefcase className="w-6 h-6" />}
        title="Work Experience"
      >
        <div className="space-y-8">
          <ExperienceCard
            title="AI Engineer"
            company="R2.AI"
            location="Shanghai"
            period="June 2025 — Present"
            current={true}
            achievements={[
              "Multi-Agent Architecture for Conversational Pipeline Generation: Designed a two-agent system — a conversational orchestrator (multi-turn intent classification, session state management, production-state bootstrapping) and a pipeline execution specialist — enabling stateful, iterative data workflow construction through natural language.",
              "Tool-Call-Based Agentic Planning with Self-Correction: Designed an iterative planning loop with intent-classified tool scoping, structured execution feedback, and automatic full-replan fallback on convergence failure — applying standard reliability patterns for production agentic systems.",
              "Agent Memory & Tiered Retrieval: Designed a context system with full short-term history, LLM-as-judge long-term memory and domain knowledge (stored as structured skill files); MCP-wrapped Traditional RAG serves as the fast retrieval path, with Agentic RAG fallback for progressive multi-hop skill document search on insufficient context.",
              "RLHF for SQL Generation: Fine-tuned Qwen Coder 1.5B via GRPO (AgentLightning) to learn a self-correcting SQL generation loop, achieving reliable Spark-executable output and decoupling this high-frequency task from general-purpose LLM inference.",
              "LLM Inference Optimization: Enforced output determinism via JSON-Schema guardrails for structured tool calls; benchmarked Qwen-Max on SGLang to maximize throughput under high-concurrency agentic workloads.",
            ]}
          />

          <ExperienceCard
            title="Statistician"
            company="Parexel"
            location="Durham, NC"
            period="July 2021 — Feb 2025"
            current={false}
            achievements={[
              "Conducted statistical modeling for oncology clinical trials, building and maintaining survival models (Cox regression, Kaplan–Meier) and causal inference models (propensity score, IPTW) for over 2,000 patients; handled missing data to support efficacy evaluation and risk prediction",
              "Designed and implemented linear and generalized linear mixed-effects models, as well as ANCOVA, for neurological clinical trials to analyze changes in cognitive scores and guide dose adjustment",
              "Integrated large-scale data from electronic medical records, lab tests, and follow-up logs using SQL and R to conduct in-depth analysis and study variable patterns and subject-level outcomes",
              "Designed and analyzed hypothesis testing (A/B testing) using multivariable mixed-effects models to evaluate causal effects and compare multiple treatment strategies across diseases",
              "Developed SQL, R, and SAS programs for data analysis and visualization, producing high-quality deliverables for regulatory submission",
              "Designed data simulations and sample size calculations in R for dose-escalation (3+3, mTPI-2) and Phase III trials with multiple comparisons and interim analysis",
              "Authored and reviewed Statistical Analysis Plans (SAPs), defining statistical methods, study endpoints, and timelines to ensure clarity, traceability, and compliance in data reporting",
            ]}
          />
        </div>
      </Section>

      {/* Education Section */}
      <Section
        icon={<GraduationCap className="w-6 h-6" />}
        title="Education"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl mb-2">Master of Science</h3>
            <p className="text-slate-600 mb-2">
              Computer Science
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Focus on Artificial Intelligence and Machine
              Learning, with expertise in natural language
              processing, deep learning, and intelligent systems
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl mb-2">Master of Science</h3>
            <p className="text-slate-600 mb-2">Biostatistics</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Statistical methods for clinical research,
              including survival analysis, mixed-effects models,
              and experimental design
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Skills */}
      <Section
        icon={<Code className="w-6 h-6" />}
        title="Technical Skills"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="mb-3">Agentic AI & LLMs</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Multi-Agent Orchestration</li>
              <li>• LangGraph & Tool-Calling</li>
              <li>• Agentic RAG & MCP</li>
              <li>• Agent Memory Systems</li>
              <li>• Prompt Engineering</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <h3 className="mb-3">RL & Post-Training</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• RLHF & GRPO</li>
              <li>• PPO (AgentLightning)</li>
              <li>• Reward Modeling</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="mb-3">Programming</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Python</li>
              <li>• Java & Spring Boot</li>
              <li>• SQL & R</li>
              <li>• SAS</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
            <h3 className="mb-3">Systems & Infra</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Docker & Nginx & AWS</li>
              <li>• MySQL & Redis</li>
              <li>• SGLang & JSON Schema</li>
              <li>• ETL Pipelines</li>
              <li>• Playwright</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Key Achievements */}
      <Section
        icon={<Award className="w-6 h-6" />}
        title="Key Achievements"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-2 text-blue-600">
              4%
            </div>
            <p className="text-slate-700">
              Hallucination rate after JSON-Schema guardrails (down from 30%)
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-2 text-purple-600">
              90%+
            </div>
            <p className="text-slate-700">
              Token-level accuracy on medical NER (Chinese-MacBERT, CMeEE)
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-2 text-green-600">
              2,000+
            </div>
            <p className="text-slate-700">
              Patients analyzed across oncology &amp; neurology trials
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
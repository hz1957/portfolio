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
            title="AI Developer"
            company="R2.AI"
            location="Shanghai"
            period="June 2025 — Present"
            current={true}
            achievements={[
              "Pioneered a 'Chat-to-Visual' ETL Platform: Architected a Generative UI system (akin to Figma Make) where AI agents autonomously construct editable, drag-and-drop data pipelines from natural language. This democratized clinical data processing, allowing non-technical researchers to build complex SDTM workflows via a 'Chat-to-Edit' interface",
              "Built a Engineered Mixed-Initiative Orchestration: Designed bidirectional state synchronization between LangGraph-based planners and the visual canvas. Enabled users to iterate on analysis logic through both conversation and direct manipulation of ETL operators (e.g., Join, Filter, Unpivot), supported by real-time validation and auto-rollback for error resilience",
              "Developed Enterprise Text-to-SQL System: Built a robust RAG engine with capabilities similar to Dify, integrating domain-specific knowledge (CDISC) to transform raw questions into precise SQL queries and ECharts visualizations for medical data review",
              "Implemented RLHF-aligned specialized policy models using AgentLightning and PPO to execute atomic tool actions, decoupling structured SQL generation from general reasoning. This design reduced inference latency on high-frequency execution nodes while preserving strict semantic correctness via preference-based alignment",
              "Transformed Unstructured Data to Quotes: Automated the extraction of numerical and formulaic details from 20-page RFPs into editable quote templates using LLMs, with dynamic pricing computation from backend databases",
              "Optimized Model Inference & Hallucination: Implemented prompt-plus-JSON-Schema guardrails that reduced hallucination rates from 30% to 4%, and benchmarked Qwen-Max on SGLang to optimize token throughput under high-concurrency agent workloads",
              "Fine-tuned Medical NLP Models: Trained Chinese-MacBERT models for medical Named Entity Recognition (NER), achieving >90% token-level accuracy on CMeEE datasets and establishing reusable sequence-labeling pipelines",
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
            <h3 className="mb-3">AI & ML</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• LangGraph & Agentic AI</li>
              <li>• RLHF & Post-Training </li>
              <li>• Prompt Engineering</li>
              <li>• NLP & Information Extraction (NER)</li>
              <li>• Computer Vision & Multimodal Models</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <h3 className="mb-3">Statistics</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Survival Analysis</li>
              <li>• Mixed-Effects Models</li>
              <li>• Causal Inference</li>
              <li>• Clinical Trial Design</li>
              <li>• Hypothesis Testing</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="mb-3">Programming</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Python</li>
              <li>• Java & Spring Boot</li>
              <li>• React & TypeScript</li>
              <li>• Next.js</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
            <h3 className="mb-3">Tools & Frameworks</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• ETL Pipelines & JSON-Schema</li>
              <li>• Redis & MySQL</li>
              <li>• Cloud Deployment</li>
              <li>• Playwright (Automation Testing)</li>
              <li>• Data Visualization</li>
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
              90%+
            </div>
            <p className="text-slate-700">
              Token-level accuracy on medical NER tasks
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-2 text-purple-600">
              2,000+
            </div>
            <p className="text-slate-700">
              Patients analyzed in clinical trials
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-2 text-green-600">
              2%
            </div>
            <p className="text-slate-700">
              Hallucination rate with guardrails (down from 30%)
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1749068372456-5567c4a6bd49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBncmFkaWVudHxlbnwxfHx8fDE3NjQ4NDk5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-6 px-6 py-20">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl shadow-2xl">
            H
          </div>
          <div>
            <h1 className="text-5xl mb-4 text-white drop-shadow-lg">
              Hello, I'm Haoming
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-md">
              AI Engineer · Multi-Agent Systems · RLHF / GRPO · Agentic RAG
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/hz1957"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:zhm0044@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/haoming-zhang-3b8795187/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl mb-6 text-center">About Me</h2>
          <div className="space-y-6 text-slate-700 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              AI Engineer specializing in multi-agent systems, post-training
              alignment, and production-grade agentic pipelines. With dual
              master's degrees in Computer Science (Georgia Tech)
              and Biostatistics (UNC Chapel Hill), I bring statistical
              rigor to AI system design, evaluation, and reliability.
            </p>
            <p className="text-lg leading-relaxed">
              At R2.AI, I architect a dual-agent platform: a conversational
              orchestrator handling multi-turn intent classification, session
              state management, and remote baseline bootstrapping — paired
              with a LangGraph-based execution specialist that generates and
              modifies data pipelines via structured tool calls. The system
              implements tiered memory (short-term context window,
              LLM-as-judge long-term memory, Agentic RAG via MCP tools)
              and includes a GRPO fine-tuned Qwen Coder 1.5B model for
              reliable, self-correcting SQL generation.
            </p>
            <p className="text-lg leading-relaxed">
              My statistics background enables rigorous model evaluation
              and experimental design — a meaningful differentiator when
              building AI systems where accuracy and reliability are
              non-negotiable. Previously at Parexel, I led statistical
              modeling for oncology and neurology clinical trials across
              2,000+ patients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              to="/experience"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                Experience
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Explore my professional journey
              </p>
              <div className="flex items-center text-blue-600 text-sm">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link
              to="/projects"
              className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <h3 className="text-xl mb-2 group-hover:text-green-600 transition-colors">
                Projects
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                View my portfolio
              </p>
              <div className="flex items-center text-green-600 text-sm">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            <Link
              to="/publications"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <h3 className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                Publications
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Read my research work
              </p>
              <div className="flex items-center text-purple-600 text-sm">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
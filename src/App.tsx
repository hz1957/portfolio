import { Github, Linkedin, Mail, ExternalLink, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-12">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl">
            H
          </div>
          <div>
            <h1 className="text-5xl mb-4">Hello, I'm HZ</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              AI Developer & Biostatistician with dual master's degrees in Computer Science and Biostatistics
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/hz1957" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Education Section */}
        <Section 
          icon={<GraduationCap className="w-6 h-6" />}
          title="Education"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl mb-2">Master of Science</h3>
              <p className="text-slate-600 mb-2">Computer Science</p>
              <p className="text-sm text-slate-500">Focus on AI and Machine Learning</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl mb-2">Master of Science</h3>
              <p className="text-slate-600 mb-2">Biostatistics</p>
              <p className="text-sm text-slate-500">Statistical methods for clinical research</p>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section 
          icon={<Briefcase className="w-6 h-6" />}
          title="Experience"
        >
          <div className="space-y-6">
            <ExperienceCard
              title="AI Developer"
              company="R2.AI"
              period="Current"
              description="Developing artificial intelligence solutions and machine learning models for healthcare and clinical applications."
              current={true}
            />
            <ExperienceCard
              title="Biostatistician"
              company="Parexel"
              period="Previous"
              description="Conducted statistical analyses for clinical trials, developed analysis plans, and generated statistical reports for pharmaceutical studies."
              current={false}
            />
          </div>
        </Section>

        {/* Publications Section */}
        <Section 
          icon={<BookOpen className="w-6 h-6" />}
          title="Publications"
        >
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">Research Publication</h3>
                <p className="text-slate-600 mb-3">
                  Published research in peer-reviewed journal combining statistical methods and computational approaches
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  View Publication <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section 
          icon={<Github className="w-6 h-6" />}
          title="Projects"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Machine Learning Pipeline"
              description="End-to-end ML pipeline for clinical data analysis with automated feature engineering and model selection"
              tags={['Python', 'TensorFlow', 'Healthcare']}
              githubUrl="https://github.com/hz1957"
            />
            <ProjectCard
              title="Statistical Analysis Tools"
              description="R package for advanced biostatistical methods in clinical trial analysis"
              tags={['R', 'Statistics', 'Clinical Trials']}
              githubUrl="https://github.com/hz1957"
            />
            <ProjectCard
              title="AI-Powered Diagnostics"
              description="Deep learning model for medical image classification and disease prediction"
              tags={['PyTorch', 'Computer Vision', 'AI']}
              githubUrl="https://github.com/hz1957"
            />
            <ProjectCard
              title="Data Visualization Dashboard"
              description="Interactive dashboard for real-time clinical trial data monitoring and analysis"
              tags={['React', 'D3.js', 'Dashboard']}
              githubUrl="https://github.com/hz1957"
            />
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/hz1957"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </div>
        </Section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p>&copy; 2025 HZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import { ArrowUpRight, Brain, Code2, Database, FileText, Github, Sparkles } from "lucide-react";
import { useOutletContext } from "react-router";
import { FeaturedProjectCard } from "../components/FeaturedProjectCard";
import { Section } from "../components/Section";
import type { LanguageOutletContext } from "../language";
import { portfolioContent } from "./Home";

const expertiseCards = [
  {
    icon: Brain,
    className: "bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all",
    iconClassName: "w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4 shadow-md",
  },
  {
    icon: Code2,
    className:
      "bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all",
    iconClassName: "w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4 shadow-md",
  },
  {
    icon: Database,
    className: "bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all",
    iconClassName: "w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4 shadow-md",
  },
];

export default function Projects() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];
  const isChinese = language === "zh";
  const featuredProject = content.projects[0];
  const firstExperience = content.experiences[0];
  const featuredFeatures = [
    {
      title: content.trainingWork[0].title,
      items: [content.trainingWork[0].detail],
    },
    {
      title: featuredProject.title,
      items: [featuredProject.detail ?? featuredProject.points?.[0] ?? featuredProject.tech],
    },
    {
      title: firstExperience.role,
      items: firstExperience.points.slice(0, 3),
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">{content.sections.projects}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {content.contactNote}
        </p>
      </div>

      <Section icon={<Sparkles className="w-6 h-6" />} title={isChinese ? "重点项目" : "Featured Project"}>
        <FeaturedProjectCard
          title={featuredProject.title}
          subtitle={featuredProject.tech}
          description={featuredProject.detail ?? content.trainingWork[0].detail}
          features={featuredFeatures}
          techStack={featuredProject.tech.split(" / ")}
          githubUrl={featuredProject.href}
          isPrivate={!featuredProject.href}
        />
      </Section>

      <Section icon={<Code2 className="w-6 h-6" />} title={content.sections.projects}>
        <div className="grid md:grid-cols-2 gap-6">
          {content.projects.map((project) => (
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow" key={project.title}>
              <h3 className="text-xl mb-3">{project.title}</h3>
              {project.detail && <p className="text-slate-600 mb-4">{project.detail}</p>}
              {project.points && (
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  {project.points.map((point) => (
                    <li className="flex items-start gap-3" key={point}>
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(" / ").map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Github className="w-4 h-4" />
                    {content.codeLabel}
                  </a>
                )}
                {project.reportHref && (
                  <a
                    href={project.reportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <FileText className="w-4 h-4" />
                    {content.reportLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<Brain className="w-6 h-6" />} title={isChinese ? "技术方向" : "Technical Expertise"}>
        <div className="grid md:grid-cols-3 gap-6">
          {content.skillGroups.slice(0, 3).map((group, index) => {
            const Icon = expertiseCards[index].icon;
            return (
              <div className={expertiseCards[index].className} key={group.label}>
                <div className={expertiseCards[index].iconClassName}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-3">{group.label}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {group.items.join(" / ")}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-center shadow-xl">
        <Github className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl text-white mb-4">
          {isChinese ? "在 GitHub 查看更多" : "Explore More on GitHub"}
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          {isChinese
            ? "查看我的公开项目、代码和项目报告。"
            : "Visit my GitHub profile to see more projects, code, and project reports."}
        </p>
        <a
          href="https://github.com/hz1957"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Github className="w-5 h-5" />
          {isChinese ? "查看 GitHub" : "View GitHub Profile"}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </main>
  );
}

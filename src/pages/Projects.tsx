import { ArrowUpRight, FileText } from "lucide-react";
import { useOutletContext } from "react-router";
import type { LanguageOutletContext } from "../language";
import { portfolioContent } from "./Home";

export default function Projects() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];

  return (
    <main className="portfolio-page">
      <div className="page-body">
        <header className="page-intro">
          <span className="hero-tag">{content.hero.tag}</span>
          <h1>{content.sections.projects}</h1>
          <p>{content.contactNote}</p>
        </header>

        <section className="cv-section" id="projects">
          <h2 className="cv-section-title">{content.sections.projects}</h2>
          <div className="project-entries">
            {content.projects.map((project) => (
              <div className="project-entry" key={project.title}>
                <div className="project-name">
                  <span>{project.title}</span>
                  <span className="project-tech">{project.tech}</span>
                  <div className="project-links">
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight aria-hidden="true" />
                        {content.codeLabel}
                      </a>
                    )}
                    {project.reportHref && (
                      <a href={project.reportHref} target="_blank" rel="noopener noreferrer">
                        <FileText aria-hidden="true" />
                        {content.reportLabel}
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  {project.detail && <p className="project-detail">{project.detail}</p>}
                  {project.points && (
                    <ul className="project-points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import { useOutletContext } from "react-router";
import type { LanguageOutletContext } from "../language";
import { portfolioContent } from "./Home";

export default function Experience() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];

  return (
    <main className="portfolio-page">
      <div className="page-body">
        <header className="page-intro">
          <span className="hero-tag">{content.hero.tag}</span>
          <h1>{content.sections.experience}</h1>
          <p>{content.hero.role}</p>
        </header>

        <section className="cv-section" id="work">
          <h2 className="cv-section-title">{content.sections.experience}</h2>
          <div className="exp-entries">
            {content.experiences.map((item) => (
              <div className="exp-entry" key={`${item.role}-${item.company}`}>
                <div className="exp-meta">
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-company">
                    {item.company}
                    {item.place ? ` / ${item.place}` : ""}
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

        <section className="cv-section" id="skills">
          <h2 className="cv-section-title">{content.sections.skills}</h2>
          <div className="skill-entries">
            {content.skillGroups.map((group) => (
              <div className="skill-entry" key={group.label}>
                <div className="skill-label">{group.label}</div>
                <div className="skill-items">{group.items.join(" / ")}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import { BookOpen, FileText } from "lucide-react";
import { useOutletContext } from "react-router";
import type { LanguageOutletContext } from "../language";
import { dofPaperHref, portfolioContent } from "./Home";

export default function Publications() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];

  return (
    <main className="portfolio-page">
      <div className="page-body">
        <header className="page-intro">
          <span className="hero-tag">{content.hero.tag}</span>
          <h1>{content.sections.research}</h1>
          <p>{content.hero.bio}</p>
        </header>

        <section className="cv-section" id="research">
          <h2 className="cv-section-title">{content.sections.research}</h2>
          <div className="edu-pub-grid">
            <div className="edu-block">
              <h3>{content.sections.degrees}</h3>
              <ul className="edu-list">
                {content.education.map((item) => (
                  <li key={item.degree}>
                    <span className="edu-degree">{item.degree}</span>
                    <span className="edu-school">{item.school}</span>
                    <span className="edu-school">{item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pub-block">
              <h3>{content.sections.articles}</h3>
              <div className="article-list">
                <article className="pub-entry">
                  <p>
                    Household Transmission of SARS-CoV-2 in the United States:
                    Living Density, Viral Load, and Disproportionate Impact on
                    Communities of Color. 2021.
                  </p>
                  <a
                    className="pub-doi"
                    href="https://doi.org/10.17615/x61s-er87"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen aria-hidden="true" />
                    doi:10.17615/x61s-er87
                  </a>
                </article>
                <article className="pub-entry">
                  <p>
                    Degrees of Freedom Estimation in the Meta-analysis of
                    Sensitivity and Specificity in Diagnosis Medicine. 2021.
                  </p>
                  <a
                    className="pub-doi"
                    href={dofPaperHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText aria-hidden="true" />
                    {content.fullArticleLabel}
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

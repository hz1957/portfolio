import { Github, Linkedin, Mail } from "lucide-react";
import { useOutletContext } from "react-router";
import type { LanguageOutletContext } from "../language";
import { portfolioContent } from "./Home";

export default function Contact() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];
  const isChinese = language === "zh";

  return (
    <main className="portfolio-page">
      <div className="page-body">
        <header className="page-intro">
          <span className="hero-tag">{content.hero.tag}</span>
          <h1>{isChinese ? "联系" : "Contact"}</h1>
          <p>{content.contactNote}</p>
        </header>

        <section className="cv-section" id="contact">
          <h2 className="cv-section-title">{isChinese ? "联系" : "Contact"}</h2>
          <div className="contact-list">
            <a className="contact-method" href="mailto:zhm0044@gmail.com">
              <Mail aria-hidden="true" />
              <span>{content.hero.emailLabel}</span>
              <strong>zhm0044@gmail.com</strong>
            </a>
            <a
              className="contact-method"
              href="https://www.linkedin.com/in/haoming-zhang-3b8795187/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin aria-hidden="true" />
              <span>LinkedIn</span>
              <strong>Haoming Zhang</strong>
            </a>
            <a
              className="contact-method"
              href="https://github.com/hz1957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github aria-hidden="true" />
              <span>GitHub</span>
              <strong>hz1957</strong>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

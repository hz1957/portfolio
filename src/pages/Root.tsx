import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import type { Language } from "../language";

export default function Root() {
  const [language, setLanguage] = useState<Language>(() =>
    window.localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en",
  );

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return (
    <div className="portfolio-root">
      <ScrollToTop />
      <Header language={language} onLanguageChange={setLanguage} />
      <Outlet context={{ language }} />
      <footer className="site-footer">
        <div className="footer-inner">
          <p>{language === "zh" ? "张昊明 - AI 研究员" : "Haoming Zhang - AI Research Engineer"}</p>
          <p>
            {language === "zh"
              ? "专注于大语言模型后训练、智能体系统与严谨评估。"
              : "Built around post-training, LLM agents, and statistical rigor."}
          </p>
        </div>
      </footer>
    </div>
  );
}

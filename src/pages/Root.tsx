import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import type { Language } from "../language";

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  const language: Language = location.pathname === "/zh" || location.pathname.startsWith("/zh/") ? "zh" : "en";

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "张昊明 | AI 工程师" : "Haoming Zhang | AI Research Engineer";

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content =
        language === "zh"
          ? "张昊明的个人主页：Agentic AI、大语言模型后训练、智能数据自动化平台、生产模型评测与统计建模。"
          : "Haoming Zhang portfolio: agentic AI, LLM post-training, intelligent data automation, production model evaluation, and statistical modeling.";
    }
  }, [language]);

  const handleLanguageChange = (nextLanguage: Language) => {
    if (nextLanguage === language) return;
    navigate({
      pathname: nextLanguage === "zh" ? "/zh/" : "/",
      hash: location.hash,
    });
  };

  return (
    <div className="portfolio-root">
      <ScrollToTop />
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Outlet context={{ language }} />
      <footer className="site-footer">
        <div className="footer-inner">
          <p>{language === "zh" ? "张昊明 - AI 工程师" : "Haoming Zhang - AI Research Engineer"}</p>
          <p>
            {language === "zh"
              ? "专注于智能体系统、大语言模型后训练与智能数据自动化。"
              : "Built around agentic AI, post-training, data automation, and statistical rigor."}
          </p>
        </div>
      </footer>
    </div>
  );
}

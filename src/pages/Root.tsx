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
    document.title = language === "zh" ? "张昊明 | AI 研究员" : "Haoming Zhang | AI Research Engineer";

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content =
        language === "zh"
          ? "张昊明的个人主页：大语言模型后训练、智能体系统、执行反馈驱动的 SQL/DAG 生成与统计建模。"
          : "Haoming Zhang portfolio: LLM post-training, agentic systems, reward modeling, execution-guided SQL/DAG generation, and statistical modeling.";
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

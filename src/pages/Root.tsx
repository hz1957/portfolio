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
    const pathWithoutLanguage = location.pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
    const nextPath =
      nextLanguage === "zh"
        ? `/zh${pathWithoutLanguage === "/" ? "/" : pathWithoutLanguage}`
        : pathWithoutLanguage;

    navigate({
      pathname: nextPath,
      hash: location.hash,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <ScrollToTop />
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Outlet context={{ language }} />
      <footer className="bg-slate-900 text-slate-400 py-8 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p>
            &copy; 2026 {language === "zh" ? "张昊明" : "Haoming Zhang"}.{" "}
            {language === "zh" ? "保留所有权利。" : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}

import type { Language } from "../language";
import { Link } from "react-router";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const navItems = {
  en: [
    ["#training", "Highlights"],
    ["#work", "Experience"],
    ["#projects", "Projects"],
    ["#skills", "Skills"],
    ["#research", "Education & Articles"],
  ],
  zh: [
    ["#training", "亮点"],
    ["#work", "经历"],
    ["#projects", "项目"],
    ["#skills", "技能"],
    ["#research", "教育与文章"],
  ],
} satisfies Record<Language, Array<[string, string]>>;

export function Header({ language, onLanguageChange }: HeaderProps) {
  const isChinese = language === "zh";

  return (
    <header className="site-header">
      <nav className="header-inner" aria-label={isChinese ? "主导航" : "Primary"}>
        <Link
          to={isChinese ? "/zh/" : "/"}
          className="brand-link"
          aria-label={isChinese ? "张昊明主页" : "Haoming Zhang home"}
        >
          <span className="brand-mark">HZ</span>
          <span className="brand-text">
            <span>{isChinese ? "张昊明" : "Haoming Zhang"}</span>
            <small>{isChinese ? "AI 工程师" : "AI Research Engineer"}</small>
          </span>
        </Link>

        <div className="main-nav">
          {navItems[language].map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="language-switch" role="group" aria-label={isChinese ? "语言" : "Language"}>
          <button
            type="button"
            className={language === "en" ? "is-active" : undefined}
            aria-pressed={language === "en"}
            onClick={() => onLanguageChange("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={language === "zh" ? "is-active" : undefined}
            aria-pressed={language === "zh"}
            onClick={() => onLanguageChange("zh")}
          >
            中文
          </button>
        </div>
      </nav>
    </header>
  );
}

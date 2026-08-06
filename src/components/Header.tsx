import type { Language } from "../language";
import { Link, useLocation } from "react-router";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const navItems = {
  en: [
    ["/", "Home"],
    ["/experience", "Experience"],
    ["/projects", "Projects"],
    ["/publications", "Education & Articles"],
    ["/contact", "Contact"],
  ],
  zh: [
    ["/zh/", "主页"],
    ["/zh/experience", "经历"],
    ["/zh/projects", "项目"],
    ["/zh/publications", "教育与文章"],
    ["/zh/contact", "联系"],
  ],
} satisfies Record<Language, Array<[string, string]>>;

export function Header({ language, onLanguageChange }: HeaderProps) {
  const isChinese = language === "zh";
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";

  const isActive = (path: string) => {
    const targetPath = path.replace(/\/+$/, "") || "/";
    if (targetPath === "/" || targetPath === "/zh") {
      return currentPath === targetPath;
    }
    return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
  };

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
            <Link className={isActive(href) ? "is-active" : undefined} to={href} key={href}>
              {label}
            </Link>
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

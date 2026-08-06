import { Link, useLocation } from "react-router";
import type { Language } from "../language";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const navItems = {
  en: [
    ["/", "Home"],
    ["/experience", "Experience"],
    ["/projects", "Projects"],
    ["/publications", "Publications"],
    ["/contact", "Contact"],
  ],
  zh: [
    ["/zh/", "主页"],
    ["/zh/experience", "经历"],
    ["/zh/projects", "项目"],
    ["/zh/publications", "文章"],
    ["/zh/contact", "联系"],
  ],
} satisfies Record<Language, Array<[string, string]>>;

export function Header({ language, onLanguageChange }: HeaderProps) {
  const location = useLocation();
  const isChinese = language === "zh";
  const currentPath = location.pathname.replace(/\/+$/, "") || "/";

  const isActive = (path: string) => {
    const targetPath = path.replace(/\/+$/, "") || "/";
    if (targetPath === "/" || targetPath === "/zh") {
      return currentPath === targetPath;
    }
    return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <Link to={isChinese ? "/zh/" : "/"} className="text-xl text-slate-900">
            HZ
          </Link>
          <div className="flex gap-4 items-center flex-wrap">
            {navItems[language].map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors ${
                  isActive(path) ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://hz1957.github.io/AI-Notes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              AI Notes
            </a>
            <div className="flex gap-2 border border-slate-200 rounded-lg p-1 bg-white">
              <button
                type="button"
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  language === "en" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => onLanguageChange("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                  language === "zh" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => onLanguageChange("zh")}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

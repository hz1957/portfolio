import { Link, useLocation } from "react-router";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl text-slate-900">
            HZ
          </Link>
          <div className="flex gap-8">
            <Link
              to="/"
              className={`transition-colors ${isActive("/") && location.pathname === "/"
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Home
            </Link>
            <Link
              to="/experience"
              className={`transition-colors ${isActive("/experience")
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className={`transition-colors ${isActive("/projects")
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Projects
            </Link>
            <Link
              to="/publications"
              className={`transition-colors ${isActive("/publications")
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Publications
            </Link>
            <a
              href="https://hz1957.github.io/AI-Notes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              AI Notes
            </a>
            <Link
              to="/contact"
              className={`transition-colors ${isActive("/contact")
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
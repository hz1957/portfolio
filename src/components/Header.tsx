export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl text-slate-900">
            HZ
          </a>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Experience
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

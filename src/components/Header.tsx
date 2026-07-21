export function Header() {
  return (
    <header className="site-header">
      <nav className="header-inner" aria-label="Primary">
        <a href={import.meta.env.BASE_URL} className="brand-link" aria-label="Haoming Zhang home">
          <span className="brand-mark">HZ</span>
          <span className="brand-text">
            <span>Haoming Zhang</span>
            <small>AI Research Engineer</small>
          </span>
        </a>

        <div className="main-nav">
          <a href="#training">Training</a>
          <a href="#agents">Agents</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
        </div>
      </nav>
    </header>
  );
}

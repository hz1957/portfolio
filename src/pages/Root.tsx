import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Root() {
  return (
    <div className="portfolio-root">
      <ScrollToTop />
      <Header />
      <Outlet />
      <footer className="site-footer">
        <div className="footer-inner">
          <p>Haoming Zhang - AI Research Engineer</p>
          <p>Built around post-training, LLM agents, and statistical rigor.</p>
        </div>
      </footer>
    </div>
  );
}

import { Outlet } from "react-router";
import { Header } from "../components/Header";

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <Outlet />
      <footer className="bg-slate-900 text-slate-400 py-8 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p>&copy; 2025 HZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

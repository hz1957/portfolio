import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "zh", Component: Home },
      { path: "experience", Component: Experience },
      { path: "zh/experience", Component: Experience },
      { path: "projects", Component: Projects },
      { path: "zh/projects", Component: Projects },
      { path: "publications", Component: Publications },
      { path: "zh/publications", Component: Publications },
      { path: "contact", Component: Contact },
      { path: "zh/contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
], {
  basename: import.meta.env.BASE_URL
});

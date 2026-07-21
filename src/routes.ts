import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: Home },
    ],
  },
], {
  basename: import.meta.env.BASE_URL
});

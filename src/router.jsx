import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Technology from "./pages/Technology";
import Notfound from "./pages/Notfound";
import Pricing from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/technology", element: <Technology /> },
      { path: "/services", element: <Pricing /> },
    ],
  },
  { path: "*", element: <Notfound /> },
]);
export default router;

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="flex">
      <About />
      <div className="h-screen overflow-y-scroll lg:w-[60vw] scroll-smooth relative">
        <nav className="fixed top-0 right-0 p-5 w-96 select-none flex justify-center gap-[10%] z-10 bg-gray-900 my-10 rounded-l-lg text-gray-200 font-murecho uppercase">
          <a href="#intro">intro</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

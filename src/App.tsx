import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import About from "./components/About";
import Projects from "./components/Projects";
import Logo from "./components/Logo";

export default function App() {
  // detect browser language for first render
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 max-w-screen font-roboto">
      <div className="flex flex-col items-center max-w-screen-lg gap-8 m-20 md:flex-row">
        <div className="max-w-xs">
          <Logo />
          <About />
        </div>
        <Projects />
      </div>
    </div>
  );
}

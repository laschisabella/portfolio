import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  const { i18n } = useTranslation();
  const [activeComponent, setActiveComponent] = useState(0);
  const components = [<Services />, <Projects />, <Contact />];

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  const handleSelect = (index: number) => {
    setActiveComponent(index);
  };

  return (
    <div className="relative flex items-center">
      <About />
      <div className="absolute top-20 right-[25%] z-10 flex gap-5 select-none translate-x-[50%]">
        {components.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`bg-gray-900 w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ${
              activeComponent === index
                ? "bg-[url('icon.png')] bg-cover w-14 h-14 relative bottom-2"
                : ""
            }`}
          />
        ))}
      </div>
      <div className="relative w-[50vw] h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeComponent * 100}%)`,
          }}
        >
          {components.map((Component, index) => (
            <div key={index} className="w-[50vw] flex-shrink-0 min-h-screen">
              {Component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

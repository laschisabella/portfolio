import { useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function App() {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("intro");

  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    intro: null,
    projects: null,
    contact: null,
  });

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6,
    });

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [handleIntersection]);

  const defaultNavLink = "px-1 py-px";

  const renderNavLink = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={
        activeSection === id
          ? `text-purple-theme cursor-not-allowed border-b-2 border-purple-theme ${defaultNavLink}`
          : `text-gray-900 hover:text-gray-600 transition ${defaultNavLink}`
      }
    >
      {label}
    </a>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <About />
      <div>
        <div className="lg:h-screen overflow-y-scroll lg:w-[60vw] scroll-smooth relative scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
          <nav className="fixed top-0 right-0 z-10 flex w-full lg:w-[45vw] gap-5 px-12 py-5 lg:my-10 uppercase rounded-l-lg select-none bg-gray-900/30 backdrop-blur-md font-murecho justify-between">
            <div className="flex gap-5">
              {renderNavLink("intro", "intro")}
              {renderNavLink("projects", "projects")}
              {renderNavLink("contact", "contact")}
            </div>

            <div className="flex gap-5 text-3xl">
              <a href="">
                <LinkedinLogo className="bg-[#0E76A8] rounded-md text-gray-100" />
              </a>
              <a href="">
                <GithubLogo />
              </a>
              <a href="">
                <WhatsappLogo className="bg-[#329431] rounded-2xl text-gray-100" />
              </a>
            </div>
          </nav>
          <section id="intro" ref={(el) => (sectionsRef.current.intro = el)}>
            <Services />
          </section>
          <section
            id="projects"
            ref={(el) => (sectionsRef.current.projects = el)}
          >
            <Projects />
          </section>
          <section
            id="contact"
            ref={(el) => (sectionsRef.current.contact = el)}
          >
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";

import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { LinkedinLogo, GithubLogo, WhatsappLogo } from "@phosphor-icons/react";

type SectionId = "services" | "projects" | "contact";
type SectionRefs = { [key in SectionId]: HTMLElement | null };

export default function App() {
  const { i18n, t } = useTranslation("common");
  const [activeSection, setActiveSection] = useState<SectionId>("services");

  const sectionsRef = useRef<SectionRefs>({
    services: null,
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
          setActiveSection(entry.target.id as SectionId);
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

  const renderNavLink = (id: SectionId, label: string) => {
    const colors: Record<SectionId, string> = {
      services: "text-purple-theme border-purple-theme",
      projects: "text-gray-100 border-gray-100",
      contact: "text-gray-100 border-gray-100",
    };
    const activeClass = colors[id];

    return (
      <a
        href={`#${id}`}
        className={`${
          activeSection === id
            ? `cursor-not-allowed border-b-2 ${activeClass} ${defaultNavLink}`
            : `hover:text-gray-600 transition ${defaultNavLink}`
        }`}
      >
        {label}
      </a>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <About />
      <div className="lg:h-screen overflow-y-scroll lg:w-[60vw] scroll-smooth relative scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
        <nav className="hidden fixed top-5 lg:top-0 left-1/2 lg:left-[70vw] -translate-x-1/2 z-10 lg:flex gap-5 px-5 py-2 lg:px-12 lg:py-5 lg:my-10 uppercase rounded-lg select-none bg-gray-100/20 backdrop-blur-sm font-murecho justify-between">
          <div className="flex gap-5">
            {renderNavLink("services", t("services"))}
            {renderNavLink("projects", t("projects"))}
            {renderNavLink("contact", t("contact"))}
          </div>
        </nav>

        <div className="fixed z-10 hidden gap-2 text-3xl translate-x-1/2 lg:flex lg:translate-x-0 right-1/2 bottom-5 lg:bottom-10 lg:right-20">
          <a
            href="https://www.linkedin.com/in/isabella-laschi/"
            aria-label="LinkedIn"
            target="_blank"
            className="p-1"
          >
            <LinkedinLogo className="bg-[#0E76A8]/70 rounded-md text-gray-100 p-1 text-5xl transition hover:bg-[#0E76A8]" />
          </a>
          <a
            href="https://github.com/laschisabella"
            aria-label="GitHub"
            className="p-1"
            target="_blank"
          >
            <GithubLogo className="p-1 text-5xl text-gray-100 transition rounded-md bg-gray-900/70 hover:bg-gray-900" />
          </a>
          <a
            href="https://wa.me/5511985454303"
            aria-label="WhatsApp"
            target="_blank"
            className="p-1"
          >
            <WhatsappLogo className="bg-[#329431]/70 rounded-md text-gray-100 p-1 text-5xl transition hover:bg-[#329431]" />
          </a>
        </div>
        <section
          id="services"
          ref={(el) => (sectionsRef.current.services = el)}
        >
          <Services />
        </section>
        <section
          id="projects"
          ref={(el) => (sectionsRef.current.projects = el)}
        >
          <Projects />
        </section>
        <section id="contact" ref={(el) => (sectionsRef.current.contact = el)}>
          <Contact />
        </section>
      </div>
    </div>
  );
}

import { useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { List } from "@phosphor-icons/react";
import { About, Contact, Projects, Services } from "./pages";
import { LangSwitch, SocialLinks } from "./components";

type SectionId = "about" | "services" | "projects" | "contact";
type SectionRefs = { [key in SectionId]: HTMLElement | null };

const sectionIds: SectionId[] = ["about", "services", "projects", "contact"];

export default function App() {
  const { i18n, t } = useTranslation("common");
  const [activeSection, setActiveSection] = useState<SectionId>("services");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sectionsRef = useRef<SectionRefs>({
    about: null,
    services: null,
    projects: null,
    contact: null,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const defaultNavLink = "md:px-1 md:py-px py-5 px-5 inline-block w-full";

  const renderNavLink = (id: SectionId, label: string) => {
    const activeClass = "text-purple-theme md:border-purple-theme";
    const inactiveClass =
      "text-gray-200 border-b-2 border-zinc-700 md:border-none hover:text-gray-600 transition";

    return (
      <a
        href={`#${id}`}
        onClick={() => setIsDropdownOpen(false)}
        className={`${
          activeSection === id
            ? `cursor-not-allowed border-b-2 border-zinc-700 ${activeClass} ${defaultNavLink}`
            : `${inactiveClass} ${defaultNavLink}`
        }`}
      >
        {label}
      </a>
    );
  };

  return (
    <div className="relative flex flex-col scroll-smooth">
      <nav className="fixed top-0 z-10 w-full p-5 uppercase bg-gray-900 select-none font-murecho">
        <div className="flex items-center justify-between max-w-screen-lg gap-5 mx-auto">
          <SocialLinks />

          <div className="hidden gap-5 md:flex">
            {sectionIds.map((id) => renderNavLink(id, t(id)))}
          </div>

          <div className="relative md:hidden" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-200 transition hover:text-gray-600"
            >
              <List className="text-5xl" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 z-20 w-[90vw] mt-2 bg-zinc-800 rounded shadow-lg">
                <ul className="flex flex-col">
                  {sectionIds.map((id) => (
                    <li key={id}>{renderNavLink(id, t(id))}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <LangSwitch />
        </div>
      </nav>

      {sectionIds.map((id) => (
        <section key={id} id={id} ref={(el) => (sectionsRef.current[id] = el)}>
          {id === "about" && <About />}
          {id === "services" && <Services />}
          {id === "projects" && <Projects />}
          {id === "contact" && <Contact />}
        </section>
      ))}
    </div>
  );
}

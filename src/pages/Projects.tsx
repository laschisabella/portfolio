import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import getProjects from "../data/projectsData";

type ProjectCardProps = {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  img: string;
  tech: string[];
  repo?: string;
  deploy: string;
};

const ProjectCard = ({
  title,
  description,
  challenge,
  solution,
  img,
  tech,
  repo = "",
  deploy,
}: ProjectCardProps) => {
  const { t } = useTranslation("projects");

  return (
    <div className="flex flex-col items-center gap-5 p-5 select-none">
      <img src={img} alt="project image" className="max-w-xl" />
      <ul className="flex gap-3">
        {tech.map((item, index) => (
          <li
            className="px-3 py-1 text-xs font-bold text-gray-200 uppercase bg-gray-900 rounded-full"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="max-w-xl p-1 text-gray-900 select-text backdrop-blur-sm">
        <h1 className="pb-5 text-2xl text-center font-murecho">{title}</h1>
        <div>
          <div className="grid grid-cols-7 gap-2">
            <span className="col-span-2 font-bold">
              {t("label.description")}
            </span>
            <span className="col-span-5">{description}</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <span className="col-span-2 font-bold">{t("label.challenge")}</span>
            <span className="col-span-5">{challenge}</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <span className="col-span-2 font-bold">{t("label.solution")}</span>
            <span className="col-span-5">{solution}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 uppercase select-none font-murecho">
        <a
          className="flex items-center gap-2 text-gray-900 transition hover:brightness-50"
          href={repo}
          target="_blank"
        >
          <CaretDoubleRight className="relative top-px" />
          <span>{t("label.repository")}</span>
        </a>
        <a
          className="flex items-center gap-2 px-5 py-3 text-xl transition rounded-xl bg-gray-100/50 hover:brightness-90"
          href={deploy}
          target="_blank"
        >
          <CaretDoubleRight className="relative top-px" />
          <span>{t("label.deploy")}</span>
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const { t } = useTranslation("projects");

  const projectsData = getProjects();

  const handleNext = () => {
    setCurrentProject((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setCurrentProject(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  return (
    <div
      className="bg-[url('/src/assets/projects-bg.png')] bg-cover min-h-screen bg-[#9F84A9] px-[8%] flex justify-center items-center"
      id="projects"
    >
      <div className="relative flex flex-col items-center justify-center h-full gap-5 overflow-hidden">
        <CaretDoubleLeft
          onClick={handlePrevious}
          className="z-10 absolute top-[50%] cursor-pointer -translate-y-[50%] left-5 text-7xl transition hover:brightness-200 text-gray-900"
        />
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentProject * 100}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="min-w-full">
              <ProjectCard
                img={project.img}
                tech={project.tech}
                repo={project.repo}
                deploy={project.deploy}
                title={t(project.titleKey)}
                description={t(project.descriptionKey)}
                challenge={t(project.challengeKey)}
                solution={t(project.solutionKey)}
              />
            </div>
          ))}
        </div>
        <CaretDoubleRight
          onClick={handleNext}
          className="z-10 absolute top-[50%] cursor-pointer -translate-y-[50%] right-5 text-7xl transition hover:brightness-200 text-gray-900"
        />
      </div>
    </div>
  );
}

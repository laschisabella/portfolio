import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";

type ProjectCardProps = {
  title: string;
  description: string;
  img: string;
  tech: string[];
  repo?: string;
  deploy: string;
};

const ProjectCard = ({
  title,
  description,
  img,
  tech,
  repo = "",
  deploy,
}: ProjectCardProps) => (
  <div className="flex flex-col items-center gap-5 p-5">
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
    <div className="max-w-lg text-center">
      <h1 className="pb-5 text-2xl text-gray-900 font-murecho">{title}</h1>
      <p className="text-lg text-gray-900 opacity-70">{description}</p>
    </div>
    <div className="flex">
      <Button title={"Repositório"} link={repo} color="text-red-900" />
      <Button title={"Visite"} link={deploy} />
    </div>
  </div>
);

const projectsData = [
  {
    titleKey: "title1",
    descriptionKey: "description1",
    img: "/src/assets/projects/test.png",
    tech: ["Next.js", "React.js", "MongoDB"],
    repo: "https://www.google.com/",
    deploy: "google.com",
  },
  {
    titleKey: "title2",
    descriptionKey: "description2",
    img: "/src/assets/projects/test.png",
    tech: ["Next.js", "React.js", "MongoDB"],
    repo: "google.com",
    deploy: "google.com",
  },
];

export default function Projects() {
  const { t } = useTranslation("projects");

  const [currentProject, setCurrentProject] = useState(0);

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
      className="bg-[url('/src/assets/projects-bg.png')] h-screen bg-[#9F84A9]"
      id="projects"
    >
      <div className="p-[5%] h-full">
        <div className="relative flex flex-col items-center gap-5 overflow-hidden">
          <CaretDoubleLeft
            onClick={handlePrevious}
            className="z-10 absolute top-[50%] cursor-pointer -translate-y-[50%] left-5 text-7xl"
          />
          <div
            className="flex transition-transform duration-500 ease-in-out select-none"
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
                />
              </div>
            ))}
          </div>
          <CaretDoubleRight
            onClick={handleNext}
            className="z-10 absolute top-[50%] cursor-pointer -translate-y-[50%] right-5 text-7xl"
          />
        </div>
      </div>
    </div>
  );
}

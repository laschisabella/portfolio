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
    <div className="flex flex-col items-center justify-between w-full gap-5 p-5 select-none md:flex-row">
      <div className="flex flex-col items-center p-5">
        <img src={img} alt="project image" className="w-96 lg:w-full" />
        <ul className="flex flex-wrap justify-center gap-3">
          {tech.map((item, index) => (
            <li
              key={index}
              className="px-3 py-1 text-xs font-bold text-gray-200 uppercase bg-gray-900 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-xs p-10 mr-20 text-gray-900 select-text lg:max-w-screen-sm backdrop-blur-sm bg-gray-200/20">
        <h1 className="pb-5 text-2xl text-center font-murecho">{title}</h1>
        <div>
          <ProjectInfoRow label={t("label.description")} value={description} />
          <ProjectInfoRow label={t("label.challenge")} value={challenge} />
          <ProjectInfoRow label={t("label.solution")} value={solution} />
        </div>
        <div className="relative flex flex-col-reverse items-center gap-2 uppercase select-none lg:gap-5 lg:flex-row font-murecho top-10 lg:top-0">
          {repo && (
            <ProjectLink
              href={repo}
              label={t("label.repository")}
              icon={<CaretDoubleRight className="relative top-px" />}
            />
          )}
          <ProjectLink
            href={deploy}
            label={t("label.deploy")}
            icon={<CaretDoubleRight className="relative top-px" />}
            extraClasses="px-5 py-3 text-xl rounded-xl bg-gray-100/50 hover:brightness-90"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectInfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="gap-2 ">
    <span className="font-bold ">{label}</span>
    <span className="">{value}</span>
  </div>
);

const ProjectLink = ({
  href,
  label,
  icon,
  extraClasses = "",
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  extraClasses?: string;
}) => (
  <a
    href={href}
    target="_blank"
    className={`flex items-center gap-2 text-gray-900 transition hover:brightness-50 ${extraClasses}`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

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
      className="bg-[url('/src/assets/projects-bg.png')] bg-cover min-h-screen bg-[#9F84A9] flex flex-col justify-center items-center"
      id="projects"
    >
      <div className="mt-32">
        <h1 className="text-4xl text-center lg:text-6xl font-major">
          {t("title")}
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full gap-5 overflow-hidden w-80 lg:w-min">
        <CaretDoubleLeft
          onClick={handlePrevious}
          className="z-10 absolute top-[12%] lg:top-[50%] cursor-pointer -translate-y-[50%] left-5 text-7xl transition hover:brightness-200 text-yellow-theme brightness-125"
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
          className="z-10 absolute top-[12%] lg:top-[50%] cursor-pointer -translate-y-[50%] right-5 text-7xl transition hover:brightness-200 text-yellow-theme brightness-125"
        />
      </div>
    </div>
  );
}

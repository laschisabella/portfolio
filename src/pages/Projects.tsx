import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import getProjects from "../data/projectsData";

type ProjectCardProps = {
  title: string;
  points: string[];
  img: string;
  tech: string[];
  repo?: string;
  deploy: string;
};

const ProjectCard = ({
  title,
  points,
  img,
  //tech,
  repo = "",
  deploy,
}: ProjectCardProps) => {
  const { t } = useTranslation("projects");

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 m-10 rounded-lg select-none backdrop-blur-sm bg-gray-600/10 lg:flex-row">
      <div className="flex flex-col items-center w-[50%] p-5">
        <img src={img} alt="project image" className="" />
        {/* <ul className="flex flex-wrap justify-center gap-3">
          {tech.map((item, index) => (
            <li key={index} className="px-2 py-1 text-7xl">
              <i className={item} />
            </li>
          ))}
        </ul> */}
      </div>
      <div className="w-screen px-8 py-8 text-gray-900 select-text lg:w-auto">
        <h1 className="text-4xl font-murecho text-balance">{title}</h1>
        <ul className="py-8 list-disc lg:max-w-md">
          {points.map((point, index) => (
            <li key={index} className="py-px">
              <Trans
                i18nKey={point}
                components={{ strong: <strong className="font-murecho" /> }}
              />
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 uppercase select-none font-murecho">
          <ProjectLink
            href={deploy}
            label={t("label.deploy")}
            icon={
              <CaretDoubleRight
                weight="bold"
                className="relative top-px text-purple-theme"
              />
            }
            extraClasses="text-xl"
          />
          {repo && (
            <ProjectLink
              href={repo}
              label={t("label.repository")}
              icon={
                <CaretDoubleRight
                  weight="bold"
                  className="relative text-purple-theme top-px"
                />
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

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
    className={`flex items-center gap-2 text-gray-900 transition hover:brightness-200 ${extraClasses}`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const { t } = useTranslation("projects");
  const projectsData = getProjects();

  const getNextIndex = (currentIndex: number, length: number) =>
    (currentIndex + 1) % length;
  const getPreviousIndex = (currentIndex: number, length: number) =>
    (currentIndex - 1 + length) % length;

  const handleNext = () =>
    setCurrentProject((prevIndex) =>
      getNextIndex(prevIndex, projectsData.length)
    );
  const handlePrevious = () =>
    setCurrentProject((prevIndex) =>
      getPreviousIndex(prevIndex, projectsData.length)
    );

  return (
    <div
      className="bg-[url('/src/assets/services-bg.png')] min-h-screen bg-gray-100 flex flex-col justify-center items-center"
      id="projects"
    >
      <div className="pt-32 lg:pt-0 my-7">
        <h1 className="text-4xl text-center text-purple-theme lg:text-5xl font-murecho">
          {t("title")}
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full gap-5 overflow-hidden w-screen lg:w-[70vw]">
        <div
          onClick={handlePrevious}
          className="z-10 absolute top-[35%] md:top-[50%] cursor-pointer -translate-y-[50%] left-[20%] lg:left-0 text-7xl transition hover:brightness-125"
        >
          <CaretDoubleLeft className="translate-x-3 translate-y-1/2 text-yellow-theme" />
          <CaretDoubleLeft className="-translate-y-1/2 text-purple-theme" />
        </div>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentProject * 100}%)` }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="min-w-full">
              <ProjectCard
                img={project.img}
                tech={project.tech}
                repo={project.repo}
                deploy={project.deploy}
                title={t(project.titleKey)}
                points={[
                  t(project.point1Key),
                  t(project.point2Key),
                  t(project.point3Key),
                  t(project.point4Key),
                  t(project.point5Key),
                ]}
              />
            </div>
          ))}
        </div>
        <div
          onClick={handleNext}
          className="hidden md:block z-10 absolute top-[35%] md:top-[50%] cursor-pointer -translate-y-[50%] right-[20%] lg:right-3 text-7xl transition hover:brightness-125"
        >
          <CaretDoubleRight className="translate-x-3 translate-y-1/2 text-purple-theme" />
          <CaretDoubleRight className="-translate-y-1/2 text-yellow-theme" />
        </div>
      </div>
    </div>
  );
}

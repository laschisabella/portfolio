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
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg select-none lg:flex-row">
      <div className="flex flex-col items-center w-[80%] lg:w-full xl:w-1/2">
        <img src={img} alt="project image" />
      </div>
      <div className="px-16 py-5 text-gray-900 select-text  w-[80%] lg:w-auto lg:px-5 lg:py-5">
        <h1 className="text-2xl uppercase font-murecho text-balance">
          {title}
        </h1>
        <ul className="py-5 list-disc text-zinc-600 lg:max-w-md">
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
                className="relative top-px text-yellow-theme"
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
                  className="relative text-yellow-theme top-px"
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
    <div className="bg-[url('/src/assets/services-bg.png')] min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="relative pt-16 text-4xl select-none md:hidden text-purple-theme lg:text-6xl font-murecho bottom-2">
          {t("title")}
        </h1>
        <div className="flex items-center justify-center gap-16 my-[6%] md:pt-32 lg:pt-0">
          <div
            onClick={handlePrevious}
            className="flex items-center gap-1 transition cursor-pointer select-none hover:brightness-110"
          >
            <CaretDoubleLeft
              weight="bold"
              className="relative text-3xl text-yellow-theme top-px"
            />
            <p className="text-xl text-gray-900 font-murecho">
              {t("label.previous")}
            </p>
          </div>
          <h1 className="relative hidden text-4xl select-none md:block text-purple-theme lg:text-6xl font-murecho bottom-2">
            {t("title")}
          </h1>
          <div
            onClick={handleNext}
            className="flex items-center gap-1 transition cursor-pointer select-none hover:brightness-110"
          >
            <p className="text-xl text-gray-900 font-murecho">
              {t("label.next")}
            </p>
            <CaretDoubleRight
              weight="bold"
              className="relative text-3xl top-px text-yellow-theme"
            />
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center h-full gap-5 overflow-hidden w-screen lg:w-[80vw]">
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
        </div>
      </div>
    </div>
  );
}

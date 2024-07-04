import ProjectItem from "./ProjectItem";
import getProjects from "../data/projectsData";
import {
  ClockCountdown,
  ExclamationMark,
  HourglassMedium,
  Presentation,
} from "@phosphor-icons/react";

export default function Project() {
  const projects = getProjects();

  return (
    <div className="flex flex-col w-full p-8 text-gray-200 rounded-md bg-gray-1000 md:p-14 gap-7">
      {projects.map((project, i) => (
        <ProjectItem
          key={i}
          name={project.name}
          description={project.description}
          urlRepository={project.urlRepository}
          urlProduction={project.urlProduction}
          tech={project.tech}
        />
      ))}
      {projects.length === 0 && (
        <div>
          <ExclamationMark
            size={"200"}
            weight="fill"
            className="text-yellow-500 "
          />
          <p>Projects coming soon!</p>
        </div>
      )}
    </div>
  );
}

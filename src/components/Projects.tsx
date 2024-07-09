import ProjectItem from "./ProjectItem";
import getProjects from "../data/projectsData";
import comingSoonIcon from "../assets/comingsoon.svg";

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
        <div className="text-sm text-purple-300">
          <img src={comingSoonIcon} className="w-60" />
          <span className="mt-5 mb-1 text-lg uppercase font-murecho">
            projects coming soon!
          </span>
        </div>
      )}
    </div>
  );
}

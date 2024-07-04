import { t } from "i18next";
import Button from "./Button";
import { ProjectI } from "../data/projectsData";

export default function Project({
  name,
  description,
  urlRepository,
  urlProduction,
  tech,
}: ProjectI) {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between my-5">
        <h1 className="text-2xl font-bold">{name}</h1>
        <ul className="flex justify-center gap-2">
          {tech.map((tech, i) => (
            <li key={i}>
              <img src={tech} className="rounded-lg" />
            </li>
          ))}
        </ul>
      </div>
      <p>{description}</p>
      <div className="flex justify-center gap-2 my-5">
        <Button title={t("projects.buttons.production")} link={urlProduction} />
        <Button title={t("projects.buttons.repository")} link={urlRepository} />
      </div>
    </div>
  );
}

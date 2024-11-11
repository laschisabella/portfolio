import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("projects");

  return (
    <div className="bg-[url('projects-bg.png')] w-[50vw] h-screen bg-[#9F84A9]"></div>
  );
}

import { useTranslation } from "react-i18next";
import {
  CaretDoubleRight,
  Globe,
  MapPin,
  RocketLaunch,
  SealCheck,
  UserFocus,
} from "@phosphor-icons/react";

import bgAbout from "/src/assets/about-bg.png";

interface BulletPointProps {
  icon: JSX.Element;
  text: string;
}

const bulletPoints = [
  {
    icon: <SealCheck weight="fill" className="text-2xl text-purple-theme" />,
    textKey: "bullet1",
  },
  {
    icon: <RocketLaunch weight="fill" className="text-2xl text-yellow-theme" />,
    textKey: "bullet2",
  },
  {
    icon: <UserFocus weight="fill" className="text-2xl text-purple-theme" />,
    textKey: "bullet3",
  },
  {
    icon: <Globe weight="fill" className="text-2xl text-yellow-theme" />,
    textKey: "bullet4",
  },
  {
    icon: <MapPin weight="fill" className="text-2xl text-purple-theme" />,
    textKey: "bullet5",
  },
];

const BulletPoint = ({ icon, text }: BulletPointProps) => (
  <div className="flex items-center gap-3 mb-2">
    {icon}
    <p>{text}</p>
  </div>
);

export default function About() {
  const { t } = useTranslation("about");
  const { i18n } = useTranslation("common");

  const getResumeLink = () => {
    const language = i18n.language;
    if (language === "en") {
      return "/path/to/your/curriculum_en.pdf"; // Caminho para o currículo em inglês
    } else if (language === "pt") {
      return "/path/to/your/curriculum_pt.pdf"; // Caminho para o currículo em português
    }
    return "/path/to/your/curriculum.pdf"; // Caminho padrão para outros idiomas
  };

  return (
    <div className="relative flex justify-center min-h-screen p-10 overflow-hidden bg-gray-900 lg:items-center lg:p-20">
      <div className="flex items-center max-w-screen-xl gap-20">
        <div className="flex flex-col items-center my-3 scale-125 lg:my-10">
          <div className="relative select-none">
            <img
              src="/logo.png"
              alt="Isabella Laschi logo"
              className="w-52 lg:w-72 opacity-20"
            />
            <img
              src="https://github.com/laschisabella.png"
              alt="Isabella Laschi"
              className="absolute rounded-full w-80 lg:w-[9.5rem] shadow-custom left-14 lg:left-[4.2rem] top-7"
            />
          </div>
          <span className="mt-3 text-5xl text-gray-100 ">Isabella Laschi</span>
          <span className="text-xl font-major text-purple-theme">
            desenvolvimento web & ux
          </span>
        </div>
        <div className="max-w-xl">
          <h1 className="text-xl lg:text-[2.5rem] leading-snug font-major text-yellow-theme">
            {t("title")}
          </h1>
          <h1 className="text-xl lg:text-[2.5rem] leading-snug font-major text-yellow-theme text-balance">
            {t("title2")}
          </h1>
          <h1 className="text-xl lg:text-[2.5rem] leading-snug font-major text-yellow-theme text-balance">
            {t("title3")}
          </h1>
          <p className="py-5 text-xl text-gray-200 font-murecho">
            {t("subtitle")}
          </p>
          <div className="flex flex-col mt-5 text-gray-200">
            {bulletPoints.map(({ icon, textKey }) => (
              <BulletPoint key={textKey} icon={icon} text={t(textKey)} />
            ))}
          </div>
          <div className="flex items-center gap-2 my-5 text-lg uppercase font-murecho text-yellow-theme">
            <CaretDoubleRight />
            <a href={getResumeLink()} target="_blank" rel="noopener noreferrer">
              {t("resume")}
            </a>
          </div>
        </div>
      </div>
      <img
        src={bgAbout}
        alt="background texture"
        className="absolute bottom-0 left-0"
      />
    </div>
  );
}

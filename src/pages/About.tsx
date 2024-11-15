import { useTranslation } from "react-i18next";
import LangSwitch from "../components/LangSwitch";
import {
  MapPin,
  RocketLaunch,
  SealCheck,
  UserFocus,
} from "@phosphor-icons/react";

import bgAbout from "/src/assets/about-bg.png";

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
    icon: <MapPin weight="fill" className="text-2xl text-yellow-theme" />,
    textKey: "bullet4",
  },
];

const BulletPoint = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="flex items-center gap-3 mb-2">
    {icon}
    <p>{text}</p>
  </div>
);

export default function About() {
  const { t } = useTranslation("about");

  return (
    <div className="relative flex items-end lg:items-center w-full p-5 lg:p-20 overflow-hidden bg-gray-900 flex-col lg:min-h-screen lg:w-[40vw]">
      <LangSwitch />
      <div className="flex flex-col items-center w-full my-3 lg:my-10">
        <div className="relative">
          <img
            src="/logo.png"
            alt="Isabella Laschi photo"
            className="w-52 lg:w-72 opacity-20"
          />
          <img
            src="https://github.com/laschisabella.png"
            alt="Isabella Laschi photo"
            className="absolute rounded-full w-32 lg:w-[9.5rem] shadow-custom left-[4.2rem] top-7"
          />
        </div>
        <span className="mt-3 text-3xl font-black text-gray-100 uppercase font-murecho">
          Isabella Laschi
        </span>
        <span className="text-xl font-major text-purple-theme">
          front-end & ux
        </span>
      </div>
      <p className="max-w-md text-gray-200">{t("intro")}</p>
      <div className="flex flex-col max-w-md mt-5 text-gray-200">
        {bulletPoints.map(({ icon, textKey }) => (
          <BulletPoint key={textKey} icon={icon} text={t(textKey)} />
        ))}
      </div>
      <img
        src={bgAbout}
        alt="background texture"
        className="absolute -bottom-10"
      />
    </div>
  );
}

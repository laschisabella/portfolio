import { useTranslation } from "react-i18next";
import {
  CaretDoubleRight,
  Globe,
  MapPin,
  RocketLaunch,
  SealCheck,
  UserFocus,
} from "@phosphor-icons/react";

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

export default function About({ cvPt }: { cvPt: boolean }) {
  const { t } = useTranslation("about");

  return (
    <div className="bg-[url('/src/assets/about-bg.png')] bg-no-repeat bg-left-bottom relative flex justify-center min-h-screen p-5 overflow-hidden bg-gray-900 lg:items-center lg:p-20">
      <div className="flex flex-col items-center gap-5 lg:flex-row max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center scale-125 md:scale-90 lg:scale-100 mt-32 lg:mt-0 my-3 text-center lg:mb-[15%]">
          <img
            src="https://github.com/laschisabella.png"
            alt="Isabella Laschi"
            className="rounded-full w-24 md:w-[50%] shadow-custom"
          />
          <span className="mt-3 text-2xl text-gray-100 md:text-5xl font-murecho">
            Isabella Laschi
          </span>
          <span className="text-xl md:my-3 font-murecho text-purple-theme">
            {t("logo")}
          </span>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-2xl text-center lg:text-left mt-2 md:text-[2.5rem] leading-snug font-major text-yellow-theme">
            {t("title")}
          </h1>
          <p className="max-w-md py-5 mx-auto text-base text-gray-200 md:text-xl lg:max-w-2xl font-murecho">
            {t("subtitle")}
          </p>
          <div className="flex flex-col max-w-md mx-auto mt-5 text-gray-200 lg:max-w-2xl">
            {bulletPoints.map(({ icon, textKey }) => (
              <BulletPoint key={textKey} icon={icon} text={t(textKey)} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 pb-10 my-5 text-lg uppercase lg:justify-start font-murecho text-yellow-theme">
            <CaretDoubleRight />
            <a
              href={
                cvPt
                  ? "https://drive.google.com/file/d/1zhw6fc4zUAiqo94OcQWkcz-DTq4Skf4n/view?usp=sharing"
                  : "https://drive.google.com/file/d/1Lt6UGmqBXSKZ9WO8e8BqkZdY_Wl4nl-L/view?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("resume")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  CaretDoubleRight,
  Coins,
  Layout,
  Lightning,
  ListHeart,
  Monitor,
  PaintBrush,
  ShoppingCart,
} from "@phosphor-icons/react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="flex flex-col p-5 text-center bg-gray-300 shadow-lg w-80 rounded-xl shadow-gray-400">
    <div className="mb-3">{icon}</div>
    <h1 className="text-gray-900 font-murecho">{title}</h1>
    <p className="text-gray-900 opacity-70">{description}</p>
  </div>
);

const IconContainer = ({ children }: { children: ReactNode }) => (
  <div className="relative flex justify-center">{children}</div>
);

const servicesData = [
  {
    titleKey: "title1",
    descriptionKey: "description1",
    icons: [
      <Layout weight="light" className="text-gray-600 text-8xl" />,
      <PaintBrush
        weight="fill"
        className="absolute text-6xl top-[2rem] right-[5rem] text-purple-theme"
      />,
    ],
  },
  {
    titleKey: "title2",
    descriptionKey: "description2",
    icons: [
      <ShoppingCart weight="light" className="text-gray-600 text-8xl" />,
      <Coins
        weight="fill"
        className="absolute text-3xl top-[1.5rem] right-[7.5rem] text-yellow-theme brightness-90"
      />,
    ],
  },
  {
    titleKey: "title3",
    descriptionKey: "description3",
    icons: [
      <Lightning weight="light" className="text-gray-600 text-8xl" />,
      <Lightning
        weight="light"
        className="absolute text-8xl -top-[0.3rem] right-[4.9rem] text-yellow-theme"
      />,
    ],
  },
  {
    titleKey: "title4",
    descriptionKey: "description4",
    icons: [
      <Monitor weight="light" className="text-gray-600 text-8xl" />,
      <ListHeart
        weight="bold"
        className="absolute text-5xl top-[1.3rem] right-[7.25rem] text-purple-theme"
      />,
    ],
  },
];

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <div className="bg-[url('services-bg.png')] h-full bg-gray-100">
      <div className="flex flex-col items-center justify-center h-full pt-12">
        <div className="flex flex-wrap justify-center max-w-screen-md gap-5">
          {servicesData.map(({ titleKey, descriptionKey, icons }, index) => (
            <ServiceCard
              key={index}
              title={t(titleKey)}
              description={t(descriptionKey)}
              icon={<IconContainer>{icons}</IconContainer>}
            />
          ))}
        </div>
        <div className="flex gap-3 my-10">
          <div className="flex items-center gap-3 px-5 py-2 text-xl uppercase border-2 rounded-lg font-murecho border-purple-theme text-purple-theme">
            <CaretDoubleRight weight="bold" className="scale-110" />
            <p>explorar projetos</p>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 text-xl uppercase border-2 rounded-lg font-murecho border-yellow-theme text-yellow-theme">
            <CaretDoubleRight weight="bold" className="scale-110" />
            <p>comece agora</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

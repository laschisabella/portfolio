import {
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
  <div className="flex items-center max-w-sm p-2 text-xs lg:flex-col lg:text-base lg:p-5 glass-effect">
    <div className="mb-3">{icon}</div>
    <div>
      <h2 className="text-gray-900 font-murecho">{title}</h2>
      <p className="text-gray-900 opacity-70">{description}</p>
    </div>
  </div>
);

const IconWrapper = ({ children }: { children: ReactNode }) => (
  <div className="relative flex justify-center w-28">{children}</div>
);

const servicesData = [
  {
    titleKey: "title1",
    descriptionKey: "description1",
    icons: (
      <>
        <Layout weight="light" className="text-gray-600 text-8xl" />
        <PaintBrush
          weight="fill"
          className="absolute text-6xl top-[2rem] right-0 text-purple-theme"
        />
      </>
    ),
  },
  {
    titleKey: "title2",
    descriptionKey: "description2",
    icons: (
      <>
        <ShoppingCart weight="light" className="text-gray-600 text-8xl" />
        <Coins
          weight="fill"
          className="absolute text-3xl top-[1.5rem] right-[2.3rem] text-yellow-theme brightness-90"
        />
      </>
    ),
  },
  {
    titleKey: "title3",
    descriptionKey: "description3",
    icons: (
      <>
        <Lightning weight="light" className="text-gray-600 text-8xl" />
        <Lightning
          weight="light"
          className="absolute text-8xl -top-[0.2rem] -right-[0.3rem] text-yellow-theme"
        />
      </>
    ),
  },
  {
    titleKey: "title4",
    descriptionKey: "description4",
    icons: (
      <>
        <Monitor
          weight="light"
          className="text-5xl text-gray-600 lg:text-8xl"
        />
        <ListHeart
          weight="bold"
          className="absolute text-3xl lg:text-5xl top-[0.48rem] lg:top-[1.3rem] right-[2.6rem] lg:right-[2.05rem] text-purple-theme"
        />
      </>
    ),
  },
];

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section
      className="bg-[url('/src/assets/services-bg.png')] px-3 py-8 bg-cover min-h-screen lg:h-screen bg-gray-100"
      id="services"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="grid grid-cols-1 gap-5 p-4 text-center lg:p-10">
          {servicesData.map(({ titleKey, descriptionKey, icons }, index) => (
            <ServiceCard
              key={index}
              title={t(titleKey)}
              description={t(descriptionKey)}
              icon={<IconWrapper>{icons}</IconWrapper>}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

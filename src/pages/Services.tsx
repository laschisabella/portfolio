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
  <div className="flex items-center max-w-sm gap-2 p-2 text-sm text-left rounded-lg lg:text-center lg:flex-col lg:text-base lg:p-5 backdrop-blur-sm bg-gray-600/10">
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
    iconContent: (
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
    iconContent: (
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
    iconContent: (
      <>
        <Lightning weight="light" className="text-gray-600 text-8xl" />
        <Lightning
          weight="light"
          className="absolute text-8xl -top-[0.2rem] right-[0.3rem] lg:-right-[0.3rem] text-yellow-theme"
        />
      </>
    ),
  },
  {
    titleKey: "title4",
    descriptionKey: "description4",
    iconContent: (
      <>
        <Monitor weight="light" className="text-gray-600 text-8xl" />
        <ListHeart
          weight="bold"
          className="absolute text-5xl top-[1.3rem] right-[2.05rem] text-purple-theme"
        />
      </>
    ),
  },
];

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section
      className="bg-[url('/src/assets/services-bg.png')] min-h-screen bg-gray-100 flex justify-center items-center"
      id="services"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-xl mx-auto lg:flex-row">
        <header className="max-w-lg">
          <h1 className="mx-5 mt-24 mb-10 text-2xl text-center lg:text-left md:text-3xl lg:text-5xl font-murecho text-purple-theme text-balance">
            {t("title")}
          </h1>
        </header>
        <div className="grid grid-cols-1 gap-5 p-4 text-center lg:grid-cols-2 lg:p-10">
          {servicesData.map(
            ({ titleKey, descriptionKey, iconContent }, index) => (
              <ServiceCard
                key={index}
                title={t(titleKey)}
                description={t(descriptionKey)}
                icon={<IconWrapper>{iconContent}</IconWrapper>}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;

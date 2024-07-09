import { DefaultTFuncReturn } from "i18next";

export interface ProjectI {
  name: DefaultTFuncReturn;
  description: DefaultTFuncReturn;
  urlRepository: string;
  urlProduction: string;
  tech: string[];
}

const getProjects = (): ProjectI[] => [
  // {
  //   name: t("projects.project1.name"),
  //   description: t("projects.project1.description"),
  //   urlRepository: "#",
  //   urlProduction: "#",
  //   tech: [
  //     "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  //     "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  //     "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  //   ],
  // },
  // {
  //   name: t("projects.project2.name"),
  //   description: t("projects.project2.description"),
  //   urlRepository: "#",
  //   urlProduction: "#",
  //   tech: [
  //     "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  //     "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  //     "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  //   ],
  // },
  // {
  //   name: t("projects.project3.name"),
  //   description: t("projects.project3.description"),
  //   urlRepository: "#",
  //   urlProduction: "#",
  //   tech: [
  //     "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  //     "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  //     "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  //   ],
  // },
];

export default getProjects;

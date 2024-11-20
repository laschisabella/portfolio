import coffee from "/src/assets/projects/coffee.png";
import financial from "/src/assets/projects/financial.png";

export interface ProjectI {
  titleKey: string;
  point1Key: string;
  point2Key: string;
  point3Key: string;
  point4Key: string;
  point5Key: string;
  img: string;
  tech: string[];
  repo?: string;
  deploy: string;
}

const getProjects = (): ProjectI[] => [
  {
    titleKey: "project1.title",
    point1Key: "project1.point1",
    point2Key: "project1.point2",
    point3Key: "project1.point3",
    point4Key: "project1.point4",
    point5Key: "project1.point5",
    img: coffee,
    tech: [
      "devicon-nextjs-plain",
      "devicon-tailwindcss-original",
      "devicon-typescript-plain",
    ],
    repo: "https://github.com/laschisabella/laschisa-coffee",
    deploy: "https://laschisa-coffee.vercel.app/",
  },
  {
    titleKey: "project2.title",
    point1Key: "project2.point1",
    point2Key: "project2.point2",
    point3Key: "project2.point3",
    point4Key: "project2.point4",
    point5Key: "project2.point5",
    img: financial,
    tech: ["devicon-react-original-wordmark", "devicon-typescript-plain"],
    repo: "https://github.com/laschisabella/laschisa-financial",
    deploy: "https://laschisa-financial.vercel.app/",
  },
];

export default getProjects;

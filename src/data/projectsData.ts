import coffee from "/src/assets/projects/coffee.png";
import financial from "/src/assets/projects/financial.png";

export interface ProjectI {
  titleKey: string;
  descriptionKey: string;
  challengeKey: string;
  solutionKey: string;
  img: string;
  tech: string[];
  repo?: string;
  deploy: string;
}

const getProjects = (): ProjectI[] => [
  {
    titleKey: "project1.title",
    descriptionKey: "project1.description",
    challengeKey: "project1.challenge",
    solutionKey: "project1.solution",
    img: coffee,
    tech: ["Next.js", "Tailwind", "TypeScript"],
    repo: "https://github.com/laschisabella/laschisa-coffee",
    deploy: "https://laschisa-coffee.vercel.app/",
  },
  {
    titleKey: "project2.title",
    descriptionKey: "project2.description",
    challengeKey: "project2.challenge",
    solutionKey: "project2.solution",
    img: financial,
    tech: ["React.js", "TypeScript", "Styled components", "Mirage.js"],
    repo: "https://github.com/laschisabella/laschisa-financial",
    deploy: "https://laschisa-financial.vercel.app/",
  },
];

export default getProjects;

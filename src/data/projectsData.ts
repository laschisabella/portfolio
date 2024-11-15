import testImage from "/src/assets/projects/test.png";

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
    img: testImage,
    tech: ["Next.js", "React.js", "MongoDB"],
    repo: "https://www.google.com/",
    deploy: "google.com",
  },
  {
    titleKey: "project2.title",
    descriptionKey: "project2.description",
    challengeKey: "project2.challenge",
    solutionKey: "project2.solution",
    img: testImage,
    tech: ["Next.js", "React.js", "MongoDB"],
    repo: "google.com",
    deploy: "google.com",
  },
];

export default getProjects;

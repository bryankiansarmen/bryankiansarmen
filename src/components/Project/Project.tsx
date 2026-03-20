import * as GlobalStyled from "../../global.style";
import Card from "../Card/Card";

const projectsData = [
  {
    title: "E-Commerce Re-platform",
    problem: "Legacy monolithic architecture causing severe performance bottlenecks during peak traffic.",
    role: "Lead Frontend Engineer — Architected the React + Vite migration.",
    outcome: "40% faster Time to Interactive; resulting in a 12% revenue increase.",
    techStack: ["React", "Vite", "Zustand", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com"
  },
  {
    title: "Financial Dashboard Analytics",
    problem: "Data visualization components were lagging when processing thousands of data points.",
    role: "Frontend Developer — Refactored charting libraries and implemented heavy memoization.",
    outcome: "Reduced render times by 60%, unlocking real-time data streaming.",
    techStack: ["React", "TypeScript", "D3.js", "WebSockets"],
    githubLink: "https://github.com"
  },
  {
    title: "SaaS Design System",
    problem: "Inconsistent UI patterns across 4 different engineering teams.",
    role: "Design Technologist — Built a comprehensive component library from scratch.",
    outcome: "Adopted by 50+ engineers, cutting frontend development time by 30%.",
    techStack: ["React", "Styled Components", "Storybook", "Figma"],
    demoLink: "https://demo.com"
  }
];

const Project = () => {
  return (
    <GlobalStyled.Section id="project" aria-labelledby="project-heading">
      <GlobalStyled.Container>
        <GlobalStyled.SectionHeader id="project-heading">Projects</GlobalStyled.SectionHeader>
        <GlobalStyled.SectionContent>
          {projectsData.map((project, index) => (
            <Card
              key={index}
              {...project}
            />
          ))}
        </GlobalStyled.SectionContent>
      </GlobalStyled.Container>
    </GlobalStyled.Section>
  );
};

export default Project;

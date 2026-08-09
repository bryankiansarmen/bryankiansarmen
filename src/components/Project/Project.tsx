import * as GlobalStyled from "../../global.style";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Quick Reserve",
    problem: "A two-sided marketplace where space owners list bookable venues and renters search, book, and pay for time slots without double-booking or relying on client-side payment state.",
    role: "Full-Stack Engineer owned the booking flow, multi-tenant authorization, and payment workflow.",
    outcome: "Atomic, database-locked booking flow; 500+ tests including a concurrent double-booking race test; zero TypeScript errors.",
    techStack: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Stripe", "Node.js", "Express", "Resend"],
    githubLink: "https://github.com/bryankiansarmen/quick-reserve-web",
    demoLink: "https://quick-reserve-psi.vercel.app"
  },
  {
    title: "DocuQuery",
    problem: "Users upload PDFs and ask natural-language questions grounded in their content requiring fast, accurate retrieval across large document sets.",
    role: "Full-Stack Engineer built the async FastAPI backend, hybrid search, caching, and React web client.",
    outcome: "Hybrid SPLADE + BGE-M3 search with Reciprocal Rank Fusion; 80%+ enforced test coverage; containerized on Render.",
    techStack: ["FastAPI", "Python", "Redis Streams", "Chroma Cloud", "Redis", "MongoDB", "PyMuPDF", "OpenRouter", "Docker", "Render", "React 19", "React Router v8", "TypeScript", "Tailwind CSS v4", "Vite"],
    githubLink: "https://github.com/bryankiansarmen/docuquery-api",
    demoLink: "https://docuquery-web.vercel.app"
  }
];

const Project = () => {
  return (
    <GlobalStyled.Section id="project" aria-labelledby="project-heading">
      <GlobalStyled.Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlobalStyled.SectionLabel>Selected work <span className="ref">04</span></GlobalStyled.SectionLabel>
          <GlobalStyled.SectionHeader id="project-heading">Things I've built.</GlobalStyled.SectionHeader>
          <GlobalStyled.SectionDesc>
            Independent full-stack projects from marketplace platforms to
            retrieval-augmented generation applications.
          </GlobalStyled.SectionDesc>
        </motion.div>
        <GlobalStyled.SectionContent style={{ marginTop: '3.5rem' }}>
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

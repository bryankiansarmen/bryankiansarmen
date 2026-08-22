import * as GlobalStyled from "../../global.style";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "MiniBoard",
    problem: "Eliminated UI latency and data synchronization friction in team collaboration by pairing instant optimistic client updates with reliable server-side Row-Level Security (RLS) enforcement and sub-second multi-user real-time state reconciliation.",
    role: "Full-Stack Engineer architected a real-time collaborative Kanban application with multi-tenant workspaces, optimistic drag-and-drop boards, interactive card details, presence indicators, and activity logs.",
    outcome: "Implemented fractional position updates with automated drift re-normalization for smooth drag-and-drop, WCAG 2.1 AA accessibility compliance, and 100+ unit, integration, and E2E tests.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Zustand", "@dnd-kit", "Playwright", "Vitest"],
    githubLink: "https://github.com/bryankiansarmen/mini-board",
    demoLink: "https://mini-board.vercel.app"
  },
  {
    title: "Quick Reserve",
    problem: "Eliminated client-side payment vulnerability risks and double-booking race conditions by driving booking state transitions exclusively through server-verified webhook events and atomic database transactions.",
    role: "Full-Stack Engineer designed and developed a full-stack, two-sided booking marketplace connecting venue owners with renters for hourly space reservations.",
    outcome: "Delivered 100% server-validated booking state transitions, robust multi-tenant data isolation via Postgres RLS policies, and 290+ automated unit & integration tests.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Stripe API", "Node.js", "Express", "Resend"],
    githubLink: "https://github.com/bryankiansarmen/quick-reserve-web",
    demoLink: "https://quick-reserve-psi.vercel.app"
  },
  {
    title: "DocuQuery",
    problem: "Eliminated LLM response hallucinations and manual document scanning by providing precise document-grounded answers, asynchronous background ingestion for large files, and dual-layer caching.",
    role: "Full-Stack Engineer built a Retrieval-Augmented Generation (RAG) platform with async FastAPI backend, Redis Streams worker, Chroma Cloud hybrid search, and React Router v8 SSR frontend.",
    outcome: "Implemented hybrid search using RRF (dense + sparse embeddings), exact SHA-256 & semantic response caching, multi-turn context recovery, and end-to-end containerization with Docker deployed to Render.",
    techStack: ["FastAPI", "Python", "Redis Streams", "Chroma Cloud", "Redis", "MongoDB", "PyMuPDF", "OpenRouter API", "Docker", "Render", "React 19", "React Router v8", "TypeScript", "Tailwind CSS v4"],
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

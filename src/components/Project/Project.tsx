import * as GlobalStyled from "../../global.style";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "CashCast",
    problem: "Manual 13-week cash forecasting in spreadsheets makes collection assumptions hard to trace and scenario comparison slow.",
    role: "Full-Stack Engineer built a browser-based accounts-receivable forecasting tool that turns an imported aging CSV into a 13-week cash forecast with best, expected, and worst scenarios, editable collection assumptions, and a budget-versus-actuals view.",
    outcome: "Architected a pure TypeScript calculation engine with integer-cent money and lint-enforced layer boundaries, guarded by five reconciliation checks, property-based and golden tests, 600+ unit tests, 90+ Playwright end-to-end tests, 100% line coverage of the engine and budget code, and zero serious or critical axe-core findings.",
    techStack: ["TypeScript", "React 19", "Vite", "Recharts", "PapaParse", "Vitest", "Playwright", "fast-check", "axe-core", "GitHub Actions", "GitHub Pages"],
    githubLink: "https://github.com/bryankiansarmen/cashcast",
    demoLink: "https://bryankiansarmen.github.io/cashcast/"
  },
  {
    title: "MiniBoard",
    problem: "Team collaboration tools suffer from laggy drag-and-drop, duplicate or lost cards under concurrent edits, and weak workspace isolation.",
    role: "Full-Stack Engineer built a multi-tenant Kanban platform with workspaces, invite codes, live presence, activity logs, and card details including comments, checklists, labels, due dates, and assignees.",
    outcome: "Engineered optimistic drag-and-drop with fractional card positions and automatic drift re-normalization; enforced workspace isolation with Supabase RLS and negative tests; validated with 200 automated tests including a two-browser real-time sync test, and built to WCAG 2.1 AA.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Zustand", "@dnd-kit", "Playwright", "Vitest", "GitHub Actions"],
    githubLink: "https://github.com/bryankiansarmen/mini-board",
    demoLink: "https://mini-board.vercel.app"
  },
  {
    title: "Quick Reserve",
    problem: "Hourly venue booking is vulnerable to double-booking races and client-side payment tampering.",
    role: "Full-Stack Engineer built a two-sided hourly marketplace where renters search, book, and pay while owners manage listings, availability, bookings, and reviews.",
    outcome: "Eliminated double-booking with atomic slot locking and a database constraint returning HTTP 409 to the losing request; confirmed bookings only through signature-verified Stripe webhooks in a standalone Express service keeping the service-role key isolated; delivered 290+ automated tests with Postgres RLS and SSR.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Stripe API", "Node.js", "Express", "Resend", "Playwright", "Vitest"],
    githubLink: "https://github.com/bryankiansarmen/quick-reserve-web",
    demoLink: "https://quick-reserve-psi.vercel.app"
  },
  {
    title: "DocuQuery",
    problem: "Large PDFs block API responses, and generic LLM answers hallucinate without document grounding.",
    role: "Full-Stack Engineer built a Retrieval-Augmented Generation platform that ingests PDFs and answers questions grounded in document content, with persistent multi-turn chat history.",
    outcome: "Processed uploads asynchronously through a Redis Streams worker with PyMuPDF chunking and dense (BGE-M3) plus sparse (Splade) embeddings; combined retrieval through RRF hybrid search in Chroma Cloud; reduced latency and LLM spend with a two-layer cache; hardened the API with per-key rate limiting, duplicate detection, and an 80% coverage gate; containerized and deployed to Render.",
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
            Independent full-stack projects spanning cash-flow forecasting, real-time
            collaboration, marketplace payments, and retrieval-augmented generation.
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

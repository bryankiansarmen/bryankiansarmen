import * as GlobalStyled from "../../global.style";
import * as Styled from "./About.style";
import bkPhoto from "../../assets/bk.jpg";
import { SiPostgresql, SiDocker, SiSpringboot, SiKotlin, SiKubernetes, SiAmazonaws, SiCsharp, SiDotnet, SiJavascript, SiNodedotjs, SiMysql, SiKtor, SiMicrosoftsqlserver, SiElasticsearch, SiRedis, SiJenkins, SiGit, SiMongodb, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiExpress, SiFastapi, SiSupabase, SiReactrouter, SiVercel, SiRender, SiGitlab, SiGithubactions, SiKeycloak, SiOpenid, SiDependabot, SiApachemaven, SiGradle, SiJunit5, SiVitest, SiPytest, SiPlaywright, SiPostman, SiGrafana, SiPrometheus, SiSentry, SiJira, SiConfluence, SiGithubcopilot, SiAnthropic } from "react-icons/si";
import { FaJava, FaPython, FaDatabase } from "react-icons/fa";
import { DatabaseZap, LineChart, Workflow, Plug, Shuffle, FlaskConical, Accessibility, Brain, Search, Merge, Cloud, Sparkles, RefreshCw, Users, Columns } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { icon: <FaJava />, name: "Java" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <SiCsharp />, name: "C#" },
      { icon: <FaDatabase />, name: "SQL" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <Workflow />, name: "Apache Camel" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiKtor />, name: "Ktor" },
      { icon: <SiDotnet />, name: ".NET" },
      { icon: <SiDotnet />, name: "ASP.NET Core" },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiReactrouter />, name: "React Router" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <LineChart />, name: "Recharts" },
    ]
  },
  {
    name: "Data & Cloud",
    skills: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <DatabaseZap />, name: "Valkey" },
      { icon: <SiMicrosoftsqlserver />, name: "MSSQL" },
      { icon: <SiElasticsearch />, name: "Elasticsearch" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <Plug />, name: "JDBC" },
      { icon: <SiAmazonaws />, name: "AWS (EKS)" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiRender />, name: "Render" },
    ]
  },
  {
    name: "Security & DevOps",
    skills: [
      { icon: <SiKeycloak />, name: "Keycloak" },
      { icon: <SiOpenid />, name: "OAuth / OIDC" },
      { icon: <SiDependabot />, name: "Dependabot" },
      { icon: <SiGitlab />, name: "GitLab CI/CD" },
      { icon: <SiGithubactions />, name: "GitHub Actions" },
      { icon: <SiJenkins />, name: "Jenkins" },
      { icon: <SiApachemaven />, name: "Maven" },
      { icon: <SiGradle />, name: "Gradle" },
    ]
  },
  {
    name: "Testing & Observability",
    skills: [
      { icon: <SiJunit5 />, name: "JUnit" },
      { icon: <FlaskConical />, name: "Mockito" },
      { icon: <SiVitest />, name: "Vitest" },
      { icon: <SiPytest />, name: "pytest" },
      { icon: <SiPlaywright />, name: "Playwright" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <Shuffle />, name: "fast-check" },
      { icon: <Accessibility />, name: "axe-core" },
      { icon: <SiGrafana />, name: "Grafana" },
      { icon: <SiPrometheus />, name: "Prometheus" },
      { icon: <SiSentry />, name: "Sentry" },
    ]
  },
  {
    name: "AI, Tools & Methods",
    skills: [
      { icon: <Brain />, name: "RAG" },
      { icon: <Search />, name: "Hybrid search" },
      { icon: <Merge />, name: "RRF" },
      { icon: <Cloud />, name: "Chroma Cloud" },
      { icon: <Sparkles />, name: "OpenRouter" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiJira />, name: "Jira" },
      { icon: <SiConfluence />, name: "Confluence" },
      { icon: <SiAnthropic />, name: "Claude Code" },
      { icon: <SiGithubcopilot />, name: "GitHub Copilot" },
      { icon: <RefreshCw />, name: "Agile" },
      { icon: <Users />, name: "Scrum" },
      { icon: <Columns />, name: "Kanban" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const About = () => {
  return (
    <GlobalStyled.Section id="about" aria-labelledby="about-heading">
      <GlobalStyled.Container>
        <Styled.AboutLayout as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>

          {/* Left: Photo placeholder */}
          <Styled.ImageWrap as={motion.div} variants={itemVariants}>
            <Styled.PhotoPlaceholder>
              <Styled.PhotoImg src={bkPhoto} alt="Bryan Kian Sarmen" />
              <Styled.PhotoCorner />
              <Styled.PhotoAccent />
            </Styled.PhotoPlaceholder>
          </Styled.ImageWrap>

          {/* Right: About text */}
          <motion.div variants={itemVariants}>
            <GlobalStyled.SectionLabel>About me <span className="ref">01</span></GlobalStyled.SectionLabel>
            <GlobalStyled.SectionHeader id="about-heading">
              Building web experiences with precision.
            </GlobalStyled.SectionHeader>

            <Styled.AboutText>
              I'm a <strong>Software Engineer</strong> with 4+ years of experience building
              Java/Spring Boot microservices and full-stack TypeScript applications. My work
              centers on REST API design, AWS (EKS) infrastructure, Keycloak identity, CI/CD
              automation, and production reliability, with hands-on delivery of secure
              multi-tenant systems using Postgres RLS, Stripe webhooks, real-time sync, and
              RAG pipelines.
            </Styled.AboutText>

            <Styled.AboutText>
              When I'm not shipping features, I'm exploring AI-assisted developer tools,
              refining UI patterns, or building retrieval-augmented applications and
              forecasting tools.
            </Styled.AboutText>

            <Styled.StatsRow>
              <Styled.StatCard data-index="01">
                <Styled.StatNumber>4+</Styled.StatNumber>
                <Styled.StatLabel>Years exp.</Styled.StatLabel>
              </Styled.StatCard>
              <Styled.StatCard data-index="02">
                <Styled.StatNumber>50+</Styled.StatNumber>
                <Styled.StatLabel>Technologies</Styled.StatLabel>
              </Styled.StatCard>
              <Styled.StatCard data-index="03">
                <Styled.StatNumber>3</Styled.StatNumber>
                <Styled.StatLabel>Companies</Styled.StatLabel>
              </Styled.StatCard>
            </Styled.StatsRow>
          </motion.div>

        </Styled.AboutLayout>

        {/* Skills Categories Section */}
        <Styled.SkillsSection>
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <GlobalStyled.SectionLabel>Tech stack <span className="ref">02</span></GlobalStyled.SectionLabel>
            <GlobalStyled.SectionHeader>Tools I work with.</GlobalStyled.SectionHeader>
          </motion.div>

          <Styled.SkillsCategoryGrid>
            {skillCategories.map((category, i) => (
              <Styled.SkillCategoryCard
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Styled.SkillCatHeader>
                  <Styled.SkillCatName>{category.name}</Styled.SkillCatName>
                  <Styled.SkillRef>[{String(i + 1).padStart(2, '0')}]</Styled.SkillRef>
                </Styled.SkillCatHeader>
                <Styled.SkillTagList>
                  {category.skills.map(skill => (
                    <Styled.SkillTag key={skill.name}>
                      {skill.icon}
                      <span>{skill.name}</span>
                    </Styled.SkillTag>
                  ))}
                </Styled.SkillTagList>
              </Styled.SkillCategoryCard>
            ))}
          </Styled.SkillsCategoryGrid>
        </Styled.SkillsSection>

      </GlobalStyled.Container>
    </GlobalStyled.Section>
  );
};

export default About;

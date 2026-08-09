import * as GlobalStyled from "../../global.style";
import * as Styled from "./About.style";
import bkPhoto from "../../assets/bk.jpg";
import { SiPostgresql, SiDocker, SiSpringboot, SiKotlin, SiKubernetes, SiAwslambda, SiCsharp, SiDotnet, SiJavascript, SiNodedotjs, SiMysql, SiKtor, SiMicrosoftsqlserver, SiElasticsearch, SiRedis, SiJenkins, SiGit, SiMongodb, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiExpress, SiFastapi, SiSupabase } from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { icon: <FaJava />, name: "Java" },
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <SiCsharp />, name: "C#" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiJavascript />, name: "JavaScript" },
    ]
  },
  {
    name: "Frontend",
    skills: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiVite />, name: "Vite" },
    ]
  },
  {
    name: "Backend & Frameworks",
    skills: [
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiKtor />, name: "Ktor" },
      { icon: <SiDotnet />, name: ".NET" },
    ]
  },
  {
    name: "Data & Cloud",
    skills: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMicrosoftsqlserver />, name: "MSSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiElasticsearch />, name: "Elasticsearch" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiAwslambda />, name: "AWS" },
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiJenkins />, name: "Jenkins" },
      { icon: <SiGit />, name: "Git" },
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
              I'm a <strong>Software Engineer</strong> who builds fast, accessible, and reliable
              web applications end to end. With experience across global organizations including
              Cambridge University Press and Assessment, I bridge the gap between polished
              frontends and powerful backend systems and ship full-stack products independently,
              from database design and server-side APIs to responsive server-rendered interfaces.
            </Styled.AboutText>

            <Styled.AboutText>
              When I'm not shipping features, I'm exploring new web technologies, refining UI patterns,
              or experimenting with AI-assisted developer tools and retrieval-augmented applications.
            </Styled.AboutText>

            <Styled.StatsRow>
              <Styled.StatCard data-index="01">
                <Styled.StatNumber>4+</Styled.StatNumber>
                <Styled.StatLabel>Years exp.</Styled.StatLabel>
              </Styled.StatCard>
              <Styled.StatCard data-index="02">
                <Styled.StatNumber>25+</Styled.StatNumber>
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

import * as GlobalStyled from "../../global.style";
import * as Styled from "./About.style";
import { SiPostgresql, SiDocker, SiSpringboot, SiKotlin, SiKubernetes, SiAwslambda, SiCsharp, SiDotnet, SiJavascript, SiNodedotjs, SiMysql, SiKtor, SiMicrosoftsqlserver, SiElasticsearch, SiRedis, SiJenkins, SiGit, SiTypescript, SiMongodb } from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <SiJavascript />, name: "Javascript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiKotlin />, name: "Kotlin" },
  { icon: <SiKtor />, name: "Ktor" },
  { icon: <SiCsharp />, name: "C#" },
  { icon: <SiDotnet />, name: ".NET" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMicrosoftsqlserver />, name: "Microsoft SQL Server" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiAwslambda />, name: "AWS" },
  { icon: <SiElasticsearch />, name: "Elasticsearch" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiJenkins />, name: "Jenkins" },
  { icon: <SiGit />, name: "Git" },
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
        <GlobalStyled.SectionHeader id="about-heading">Professional Summary</GlobalStyled.SectionHeader>

        <Styled.AboutGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Styled.SummarySection>
            <Styled.SummaryBlock as={motion.article} variants={itemVariants}>
              <p className="lead">
                I am a results driven <strong>Software Engineer</strong> with strong expertise in architecting
                and optimizing scalable backend systems, APIs, and data automation pipelines.
                With a proven track record across global organizations including Cambridge University Press and Assessment, I specialize in translating complex business requirements into high performance, secure, and reliable technical solutions.
              </p>

              <ul className="highlights">
                <li>
                  <strong>System Architecture & Reliability:</strong> Proficient in designing resilient microservices and applications using Java, Spring Boot, Node.js, and C#, minimizing downtime across environments.
                </li>
                <li>
                  <strong>Data Integration & Automation:</strong> Engineered robust ETL pipelines, bidirectional API synchronizations, and SQL optimizations that reduced manual workloads by up to 90%.
                </li>
                <li>
                  <strong>Modern Full-Stack Delivery:</strong> Adept at bridging the gap between powerful backends and modern, responsive frontends using React and TypeScript.
                </li>
                <li>
                  <strong>Engineering Excellence:</strong> Passionate about code quality, CI/CD automation (Docker, Kubernetes, AWS), and leveraging AI tools like GitHub Copilot to accelerate development velocity.
                </li>
              </ul>
            </Styled.SummaryBlock>
          </Styled.SummarySection>

          <Styled.VisualSection variants={itemVariants}>
            <Styled.DecorativeLine />
            <Styled.SkillsGrid>
              {skills.map((skill, i) => (
                <div key={i} className="icon-wrapper" aria-label={skill.name}>
                  {skill.icon}
                  <span aria-hidden="true">{skill.name}</span>
                </div>
              ))}
            </Styled.SkillsGrid>
          </Styled.VisualSection>
        </Styled.AboutGrid>

      </GlobalStyled.Container>
    </GlobalStyled.Section>
  );
};

export default About;

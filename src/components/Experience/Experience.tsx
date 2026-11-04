import * as GlobalStyled from "../../global.style";
import * as Styled from "./Experience.style";

const experiences = [
  {
    role: "Software Engineer",
    company: "Digital Services Cambridge Limited (ROHQ)",
    location: "Makati, Metro Manila",
    date: "Jan 2025 – Present",
    technologies: ["Java", "Spring Boot", "Apache Camel", "JavaScript", "Node.js", "Python", "TypeScript", "AWS (EKS)", "MongoDB", "MySQL", "Redis", "Valkey", "Elasticsearch", "Kubernetes", "Docker", "Keycloak", "Dependabot", "Jenkins", "Git", "GitLab CI/CD", "Maven", "GitHub Copilot", "Claude Code", "Playwright"],
    achievements: [
      "Design and maintain REST APIs and Apache Camel integration routes across Java/Spring Boot microservices.",
      "Migrated containerized services to Amazon EKS and implemented autoscaling, improving scalability, reliability, and operational efficiency.",
      "Implemented institution resolution in the Keycloak post-login flow and developed custom Service Provider Interfaces (SPIs) for identity authentication endpoints, unifying access-token claims across authentication contexts.",
      "Migrated caching infrastructure to Valkey, preserving performance and scalability while improving compatibility.",
      "Optimized Elasticsearch indexing and standardized product data fields and lookup mechanisms, improving search stability, data consistency, and maintainability.",
      "Remediated Dependabot-identified vulnerabilities and modernized JDBC and AWS SDK dependencies, improving security, compatibility, and performance.",
      "Design and maintain CI/CD pipelines and AWS infrastructure, and resolve production incidents using Grafana/Prometheus/Sentry.",
      "Automate engineering and QA workflows with Python and Playwright, reducing manual effort across recurring tasks and regression testing."
    ]
  },
  {
    role: "Software Engineer",
    company: "Marlow Navigation Philippines Inc.",
    location: "Malate, Metro Manila",
    date: "Apr 2023 – Jan 2025",
    technologies: ["Kotlin", "Ktor", "C#", ".NET", "ASP.NET Core", "PostgreSQL", "MySQL", "Microsoft SQL Server", "Git", "Gradle"],
    achievements: [
      "Developed and maintained REST APIs using Kotlin (Ktor), C#, and ASP.NET Core.",
      "Reduced backend latency by optimizing database interactions and implementing connection pooling.",
      "Diagnosed and resolved out-of-memory failures caused by inefficient object allocation and garbage collection, reducing backend downtime.",
      "Developed automation scripts to streamline entitlement assignment and reduce manual workload.",
      "Contributed to Windows-based kiosk applications, improving UI functionality and stability."
    ]
  },
  {
    role: "Data Analyst",
    company: "M Technologies Network and Data Solution",
    location: "Sta. Maria, Bulacan",
    date: "Aug 2022 – Jan 2023",
    technologies: ["Microsoft SQL Server", "SQL Server Integration Services", "ETL Pipelines"],
    achievements: [
      "Optimized SQL Server stored procedures, improving data processing efficiency and reducing system load.",
      "Designed ETL pipelines using SSIS for consistent and reliable data integration.",
      "Analyzed large datasets to generate actionable insights for business decisions.",
      "Implemented data validation rules to ensure integrity across data pipelines."
    ]
  }
];

const Experience = () => {
  return (
    <GlobalStyled.Section id="experience" aria-labelledby="experience-heading" style={{ borderTop: '1px solid rgba(59, 145, 245, 0.12)' }}>
      <GlobalStyled.Container>
        <Styled.HeaderBlock
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlobalStyled.SectionLabel>Career <span className="ref">03</span></GlobalStyled.SectionLabel>
          <GlobalStyled.SectionHeader id="experience-heading">Where I've worked.</GlobalStyled.SectionHeader>
        </Styled.HeaderBlock>

        <Styled.Timeline>
          {experiences.map((exp, index) => (
            <Styled.TimelineItem
              key={index}
              data-index={String(index + 1).padStart(2, '0')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Styled.TimelineDot />
              <Styled.ExpPeriod>{exp.date}</Styled.ExpPeriod>
              <Styled.ExpRole>{exp.role}</Styled.ExpRole>
              <Styled.ExpCompany>{exp.company} · {exp.location}</Styled.ExpCompany>
              <Styled.ExpDesc>
                <ul>
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Styled.ExpDesc>
              <Styled.ExpTags>
                {exp.technologies.map(tech => (
                  <Styled.TechTag key={tech}>{tech}</Styled.TechTag>
                ))}
              </Styled.ExpTags>
            </Styled.TimelineItem>
          ))}
        </Styled.Timeline>

        <Styled.EducationSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Bachelor of Science in Information Systems</h3>
          <p>Immaculate Conception I-College of Arts and Technology &middot; Aug 2018 – Jun 2022</p>
          <div className="honors">Programmer of the Year &middot; Best in Capstone Project</div>
        </Styled.EducationSection>

      </GlobalStyled.Container>
    </GlobalStyled.Section>
  );
};

export default Experience;

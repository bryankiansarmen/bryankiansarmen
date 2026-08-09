import * as GlobalStyled from "../../global.style";
import * as Styled from "./Experience.style";

const experiences = [
  {
    role: "Software Engineer",
    company: "Digital Services Cambridge Limited ROHQ",
    location: "Makati, Metro Manila",
    date: "Jan 2025 – Present",
    technologies: ["Java", "Spring Boot", "Apache Camel", "Node.js", "TypeScript", "Python", "AWS", "Elasticsearch", "Redis", "MySQL", "MongoDB", "Kubernetes", "Docker", "Jenkins", "GitLab CI/CD", "Playwright", "Grafana", "Sentry"],
    achievements: [
      "Develop and maintain REST APIs and microservices using Java, Spring Boot, Apache Camel, and Node.js.",
      "Optimize Elasticsearch indexing to prevent mapping explosion and improve system stability.",
      "Improve API performance through autoscaling strategies and efficient resource utilization.",
      "Design and maintain CI/CD pipelines and support AWS infrastructure in collaboration with Site Reliability Engineering teams.",
      "Develop Python automation scripts and Playwright test automation to streamline engineering workflows.",
      "Investigate and resolve production issues through proactive monitoring, root-cause analysis, and targeted fixes.",
      "Use GitHub Copilot and AI-assisted development tools to improve development velocity and code quality."
    ]
  },
  {
    role: "Software Engineer",
    company: "Marlow Navigation Philippines Inc.",
    location: "Malate, Metro Manila",
    date: "Apr 2023 – Jan 2025",
    technologies: ["Kotlin", "Ktor", "C#", ".NET", "ASP.NET Core", "PostgreSQL", "MySQL", "Microsoft SQL Server"],
    achievements: [
      "Developed and maintained REST APIs using Kotlin (Ktor), C#, and ASP.NET Core.",
      "Reduced backend latency by optimizing database interactions and implementing connection pooling.",
      "Resolved backend downtime caused by unoptimized garbage collection and out-of-memory conditions.",
      "Developed automation scripts to streamline entitlement assignment and reduce manual workload.",
      "Enhanced UI functionality and stability of Windows-based kiosk applications."
    ]
  },
  {
    role: "Data Analyst",
    company: "M Technologies Network and Data Solution",
    location: "Sta. Maria, Bulacan",
    date: "Aug 2022 – Jan 2023",
    technologies: ["Microsoft SQL Server", "SSIS", "ETL"],
    achievements: [
      "Optimized stored procedures to improve data processing efficiency and reduce system load.",
      "Designed and maintained ETL pipelines using SQL Server Integration Services.",
      "Analyzed large datasets to generate actionable insights for business decisions.",
      "Implemented data-validation rules to improve data integrity across ETL pipelines."
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

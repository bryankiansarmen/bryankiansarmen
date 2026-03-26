import * as GlobalStyled from "../../global.style";
import * as Styled from "./Experience.style";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cambridge University Press and Assessment",
    location: "Makati, Metro Manila",
    date: "Jan 2025 – Present",
    technologies: ["Java", "Spring Boot", "Node.js", "Python", "AWS", "Kubernetes", "Elasticsearch", "Redis", "MySQL", "MongoDB"],
    achievements: [
      "Improved code quality and reduced post-deployment defects by implementing code reviews, integrating AI generated code evaluation from GitHub Copilot within the SDLC workflow.",
      "Accelerated development velocity and reduced manual effort by developing Python automation scripts and reusable backend components.",
      "Maintained high system reliability and minimized downtime by debugging and resolving production issues across test and live environments.",
      "Strengthened application security and scalability by designing and developing backend services following clean engineering best practices.",
      "Enhanced cross functional delivery by analyzing business requirements and translating them into actionable technical designs."
    ]
  },
  {
    role: "Software Engineer",
    company: "Marlow Navigation Philippines Inc.",
    location: "Malate, Metro Manila",
    date: "Apr 2023 – Jan 2025",
    technologies: ["Kotlin", "C#", ".NET", "PostgreSQL", "MySQL", "Microsoft SQL Server"],
    achievements: [
      "Reduced third-party data entry workload by 90% by integrating an external API with the internal database and automating bidirectional data synchronization.",
      "Improved backend response times for high-traffic APIs by optimizing database queries and refining service architecture across production systems.",
      "Increased operational efficiency and reduced human error by automating user privilege assignments through backend scripting.",
      "Improved system reliability and maintainability by delivering well documented RESTful APIs supported by comprehensive unit testing."
    ]
  },
  {
    role: "Data Analyst",
    company: "M Technologies Network and Data Solution",
    location: "Sta. Maria, Bulacan",
    date: "Aug 2022 – Jan 2023",
    technologies: ["Microsoft SQL Server", "SSIS", "ETL"],
    achievements: [
      "Improved data processing performance and reduced system load by developing and optimizing stored procedures.",
      "Ensured data consistency and integrity across the data warehouse by designing ETL pipelines with automated validation rules.",
      "Enabled data-driven decision-making by analyzing large datasets to identify actionable insights for cross-department optimization initiatives."
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
          <GlobalStyled.SectionLabel>Career</GlobalStyled.SectionLabel>
          <GlobalStyled.SectionHeader id="experience-heading">Where I've worked.</GlobalStyled.SectionHeader>
        </Styled.HeaderBlock>

        <Styled.Timeline>
          {experiences.map((exp, index) => (
            <Styled.TimelineItem
              key={index}
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

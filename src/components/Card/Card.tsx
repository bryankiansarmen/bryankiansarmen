import React from "react";
import * as Styled from "./Card.style";
import { ExternalLink, Github } from "lucide-react";

interface CardProps {
  title: string;
  problem: string;
  role: string;
  outcome: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
}

const Card: React.FC<CardProps> = React.memo(({
  title,
  problem,
  role,
  outcome,
  techStack,
  githubLink,
  demoLink
}) => {
  return (
    <Styled.CardContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      whileHover="hover"
    >
      <Styled.CardContent>
        <Styled.CardHeader>
          <Styled.CardTitle>{title}</Styled.CardTitle>
          <Styled.CardLinks>
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source on GitHub`}>
                <Github size={20} />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} live demo`}>
                <ExternalLink size={20} />
              </a>
            )}
          </Styled.CardLinks>
        </Styled.CardHeader>

        <Styled.CardBody>
          <Styled.DataBlock>
            <strong>Problem:</strong> {problem}
          </Styled.DataBlock>
          <Styled.DataBlock>
            <strong>Role:</strong> {role}
          </Styled.DataBlock>
          <Styled.DataBlock className="highlight">
            <strong>Outcome:</strong> {outcome}
          </Styled.DataBlock>
        </Styled.CardBody>

        <Styled.TechStack>
          {techStack.map(tech => (
            <Styled.Badge key={tech}>{tech}</Styled.Badge>
          ))}
        </Styled.TechStack>
      </Styled.CardContent>
      
      {/* Decorative overlay for hover interaction */}
      <Styled.HoverOverlay 
        variants={{
          hover: { opacity: 1 }
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </Styled.CardContainer>
  );
});

export default Card;

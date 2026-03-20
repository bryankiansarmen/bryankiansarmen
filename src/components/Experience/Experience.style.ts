import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const ExperienceCard = styled(motion.article)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--color-accent);
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export const Role = styled.h3`
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  color: var(--color-text-primary);
  font-weight: 600;
  margin: 0;
`;

export const DateSpan = styled.span`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-accent);
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const CompanyInfo = styled.div`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TechBadge = styled.span`
  background: rgba(194, 167, 125, 0.1);
  color: var(--color-accent);
  font-size: var(--text-xs);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-weight: 500;
`;

export const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    font-size: var(--text-base);
    color: var(--color-text-secondary);
    line-height: 1.6;
    position: relative;
    padding-left: 1.25rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--color-accent);
    }
  }
`;

export const EducationSection = styled(motion.div)`
  margin-top: 5rem;
  text-align: center;
  
  h3 {
    font-family: var(--font-heading);
    color: var(--color-text-primary);
    font-size: var(--text-2xl);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
  }

  .honors {
    color: var(--color-accent);
    font-weight: 500;
    font-size: var(--text-sm);
  }
`;

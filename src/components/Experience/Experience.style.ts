import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderBlock = styled(motion.div)``;

export const Timeline = styled.div`
  margin-top: 3.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, var(--electric), transparent);
  }
`;

export const TimelineItem = styled(motion.div)`
  padding: 0 0 3rem 2.5rem;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -5px;
  top: 4px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--electric);
  box-shadow: 0 0 10px var(--electric-glow);
`;

export const ExpPeriod = styled.div`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--electric);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const ExpRole = styled.div`
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
`;

export const ExpCompany = styled.div`
  font-size: 0.9rem;
  color: var(--blue-300);
  margin-bottom: 1rem;
`;

export const ExpDesc = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 580px;
  margin-bottom: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    position: relative;
    padding-left: 1.25rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--electric);
    }
  }
`;

export const ExpTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TechTag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--blue-200);
  background: rgba(59, 145, 245, 0.1);
  border: 1px solid rgba(59, 145, 245, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  letter-spacing: 0.04em;
`;

export const EducationSection = styled(motion.div)`
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-border);
  text-align: center;

  h3 {
    font-family: var(--font-heading);
    color: var(--color-text-primary);
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .honors {
    color: var(--electric);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 0.8rem;
    letter-spacing: 0.05em;
  }
`;

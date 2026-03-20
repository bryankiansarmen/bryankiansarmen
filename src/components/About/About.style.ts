import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

export const SummarySection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SummaryBlock = styled.article`
  .lead {
    font-size: var(--text-lg);
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    
    strong {
      color: var(--color-text-primary);
      font-weight: 600;
    }
  }

  .highlights {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li {
      font-size: var(--text-base);
      color: var(--color-text-secondary);
      line-height: 1.6;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        top: 2px;
        color: var(--color-accent);
        font-family: var(--font-heading);
        font-size: 1.2rem;
      }

      strong {
        color: var(--color-text-primary);
        font-weight: 600;
      }
    }
  }
`;

export const VisualSection = styled(motion.div)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(194, 167, 125, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1.5rem;
  
  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    transition: color 0.3s ease;
    
    svg {
      font-size: 2.5rem;
    }
    
    span {
      font-family: var(--font-body);
      font-size: var(--text-xs);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    &:hover {
      color: var(--color-text-primary);
    }
  }
`;

export const DecorativeLine = styled.div`
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  margin: 0 auto 2rem;
  opacity: 0.5;
`;

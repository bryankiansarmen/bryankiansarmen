import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.article)`
  position: relative;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;

export const HoverOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, var(--color-accent-subtle) 0%, transparent 100%);
  z-index: -1;
  pointer-events: none;
`;

export const CardContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-surface-hover);
`;

export const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  color: var(--color-text-primary);
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: var(--color-text-secondary);
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover, &:focus-visible {
      color: var(--color-accent);
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
  margin-bottom: 2rem;
`;

export const DataBlock = styled.p`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.6;

  strong {
    color: var(--color-text-primary);
    font-weight: 600;
    margin-right: 0.5rem;
  }

  &.highlight {
    color: var(--color-text-primary);
    strong {
      color: var(--color-accent);
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
`;

export const Badge = styled.span`
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

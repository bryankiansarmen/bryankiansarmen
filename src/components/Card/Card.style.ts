import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.article)`
  position: relative;
  background-color: var(--paper-raised);
  border: 1px solid var(--hairline);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;

  &:hover {
    border-color: var(--hairline-strong);
    box-shadow: 0 1px 0 var(--hairline-soft), 0 20px 50px -30px rgba(0, 0, 0, 0.45);
  }
`;

export const HoverOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: var(--fill-soft);
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
  border-bottom: 1px solid var(--hairline);
`;

export const CardTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  color: var(--ink);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`;

export const CardLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: var(--ink-3);
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus-visible {
      color: var(--signal-bg);
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
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.6;

  strong {
    color: var(--ink);
    font-weight: 600;
    margin-right: 0.5rem;
  }

  &.highlight {
    color: var(--ink);
    strong {
      color: var(--signal-bg);
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

export const Badge = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  color: var(--ink-3);
  background-color: var(--fill-soft);
  border: 1px solid var(--hairline);
  padding: 0.25rem 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;
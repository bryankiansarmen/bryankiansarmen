import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderBlock = styled(motion.div)``;

/* Datasheet ledger: hairline columns, square datum marks, no rounded shapes */
export const Timeline = styled.div`
  margin-top: 3.5rem;
  border-top: 1px solid var(--hairline-strong);
`;

export const TimelineItem = styled(motion.article)`
  padding: 2.5rem 0 2.5rem 1.75rem;
  position: relative;
  border-bottom: 1px solid var(--hairline);

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: attr(data-index);
    position: absolute;
    left: 0;
    top: 2.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.62rem;
    color: var(--ink-4);
    letter-spacing: 0.08em;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -4px;
  top: 3.2rem;
  width: 9px;
  height: 9px;
  background: var(--signal-bg);
  box-shadow: 0 0 0 1px var(--paper);
`;

export const ExpPeriod = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--ink-4);
  letter-spacing: 0.12em;
  margin-bottom: 0.7rem;
  text-transform: uppercase;
`;

export const ExpRole = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.25rem;
`;

export const ExpCompany = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.76rem;
  color: var(--ink-3);
  letter-spacing: 0.04em;
  margin-bottom: 1.2rem;
`;

export const ExpDesc = styled.div`
  font-size: 0.9rem;
  color: var(--ink-2);
  line-height: 1.8;
  max-width: 620px;
  margin-bottom: 1.2rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  li {
    position: relative;
    padding-left: 1.25rem;

    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--ink-4);
    }
  }
`;

export const ExpTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TechTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--ink-3);
  background: var(--fill-soft);
  border: 1px solid var(--hairline);
  padding: 0.2rem 0.55rem;
  letter-spacing: 0.04em;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--signal-bg);
    color: var(--ink);
  }
`;

export const EducationSection = styled(motion.div)`
  margin-top: 5rem;
  padding: 2rem 2.5rem;
  border: 1px solid var(--hairline-strong);
  background: var(--fill-soft);
  text-align: left;
  position: relative;

  &::before {
    content: 'EDU';
    position: absolute;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.18em;
    color: var(--ink-4);
    top: 0.9rem;
    right: 1.1rem;
  }

  h3 {
    font-family: 'Syne', sans-serif;
    color: var(--ink);
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  p {
    color: var(--ink-2);
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.76rem;
    letter-spacing: 0.02em;
  }

  .honors {
    color: var(--signal-bg);
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    font-size: 0.74rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding-top: 110px;
    padding-bottom: 60px;
  }
`;

export const HeroInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/* Datasheet status line: STATUS [[ OPEN ]] */
export const HeroTag = styled(motion.div)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  font-weight: 400;
  color: var(--ink-3);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid var(--hairline-strong);
  padding: 0.35rem 0.7rem;
  background: var(--fill-soft);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--signal-bg);
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.6rem, 8vw, 4.9rem);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin-bottom: 1.4rem;
  color: var(--ink);

  em.accent {
    font-style: normal;
    color: var(--ink-3);
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 10vw, 2.8rem);
  }
`;

export const HeroRole = styled(motion.div)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.86rem;
  color: var(--ink-2);
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  .label {
    color: var(--ink-4);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 0.66rem;
  }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

export const CursorBlink = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: var(--signal-bg);
  margin-left: 2px;
  vertical-align: middle;
  animation: ${blink} 1s steps(1) infinite;
`;

export const HeroDescription = styled(motion.p)`
  font-size: 1rem;
  color: var(--ink-2);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 2.5rem;
`;

export const ActionGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

/* The engineer spec sheet */
export const CodeWindow = styled.div`
  background: var(--paper-raised);
  border: 1px solid var(--hairline-strong);
  border-radius: 2px;
  overflow: hidden;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 1px 0 var(--hairline-soft), 0 24px 60px -30px rgba(0, 0, 0, 0.45);
  font-variant-ligatures: none;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  background: var(--fill-soft);
  border-bottom: 1px solid var(--hairline);

  .traffic {
    display: flex;
    gap: 0.4rem;
  }
`;

export const Dot = styled.span<{ color: string }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${props => props.color};
`;

export const CodeFilename = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: var(--ink-4);
  margin-left: 0.5rem;
  letter-spacing: 0.04em;
`;

export const CodeBody = styled.div`
  padding: 1.2rem 1.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.76rem;
  line-height: 1.9;
  color: var(--ink-2);
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--hairline-strong);
    border-radius: 2px;
  }
`;

export const CodeLine = styled.div``;

export const Ln = styled.span`
  color: var(--ink-4);
  width: 1.5rem;
  display: inline-block;
  font-size: 0.66rem;
  user-select: none;
`;

export const Kw = styled.span`
  color: var(--signal-bg);
  font-weight: 700;
  background: var(--fill-soft);
  padding: 0 0.2em;
  border-radius: 2px;
`;

export const Fn = styled.span`
  color: var(--ink);
  font-weight: 500;
`;

export const Str = styled.span`
  color: var(--ink-3);
`;

export const Cm = styled.span`
  color: var(--ink-4);
  font-style: italic;
`;

export const Val = styled.span`
  color: var(--signal-bg);
  font-weight: 600;
`;

export const Punct = styled.span`
  color: var(--ink-4);
`;
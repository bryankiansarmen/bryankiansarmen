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
    padding-top: 100px;
    padding-bottom: 60px;
  }
`;

export const HeroInner = styled.div`
  max-width: 1100px;
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

export const HeroTag = styled(motion.div)`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--electric);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    display: block;
    width: 32px;
    height: 1px;
    background: var(--electric);
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

export const HeroRole = styled(motion.div)`
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--blue-300);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

export const CursorBlink = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: var(--electric);
  margin-left: 2px;
  vertical-align: middle;
  animation: ${blink} 1s steps(1) infinite;
`;

export const HeroDescription = styled(motion.p)`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 2.5rem;
`;

export const ActionGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

/* Code Window Styled Components */
export const HeroVisual = styled(motion.div)`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const CodeWindow = styled.div`
  background: var(--navy-800);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 0 60px rgba(0, 212, 255, 0.05), 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  background: var(--navy-700);
  border-bottom: 1px solid var(--color-border);
`;

export const Dot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.color};
`;

export const CodeFilename = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  margin-left: 0.5rem;
`;

export const CodeBody = styled.div`
  padding: 1.2rem 1.4rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  line-height: 2;
  color: var(--color-text-secondary);
`;

export const CodeLine = styled.div``;

export const Ln = styled.span`
  color: var(--color-text-muted);
  width: 1.5rem;
  display: inline-block;
  font-size: 0.68rem;
  user-select: none;
`;

export const Kw = styled.span`
  color: #7dd3fc;
`;

export const Fn = styled.span`
  color: #a5f3fc;
`;

export const Str = styled.span`
  color: #86efac;
`;

export const Cm = styled.span`
  color: var(--color-text-muted);
  font-style: italic;
`;

export const Val = styled.span`
  color: #fde68a;
`;

export const Punct = styled.span`
  color: var(--color-text-secondary);
`;

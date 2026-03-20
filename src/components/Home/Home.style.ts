import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(194, 167, 125, 0.08) 0%, transparent 40%),
                radial-gradient(circle at bottom left, rgba(26, 26, 30, 0.8) 0%, transparent 40%);
    pointer-events: none;
    z-index: -1;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Eyebrow = styled(motion.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--color-accent);
    box-shadow: 0 0 8px var(--color-accent);
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-family: var(--font-heading);
  font-size: var(--text-6xl);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;

  span {
    color: var(--color-accent);
    font-style: italic;
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 3rem;
`;

export const ActionGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

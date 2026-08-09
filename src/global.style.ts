import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5%;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.8rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: var(--signal-bg);
  color: var(--signal-ink);
  border: 1px solid var(--signal-bg);
  border-radius: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, opacity 0.2s;
  text-decoration: none;
  position: relative;

  &:hover {
    background: var(--paper-raised);
    color: var(--signal-bg);
  }

  &:focus-visible {
    outline-offset: 3px;
  }

  &.secondary {
    background: transparent;
    color: var(--ink);
    border-color: var(--hairline-strong);

    &:hover {
      background: var(--signal-bg);
      color: var(--signal-ink);
    }
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const Section = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

/* Mono annotation row: [label] + ruled datum frame */
export const SectionLabel = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: var(--ink-3);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 2.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--hairline);
  }

  &:has(style) {
    border: none;
  }

  span.ref {
    font-weight: 300;
    color: var(--ink-4);
  }
`;

export const SectionHeader = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.9rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.08;
  margin-bottom: 1rem;
  color: var(--ink);
`;

export const SectionDesc = styled.p`
  font-size: 1rem;
  color: var(--ink-2);
  max-width: 560px;
  line-height: 1.8;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

/* Datasheet divider: full run hairline with a datum notch */
export const SheetRule = styled.div`
  height: 1px;
  background: var(--hairline-strong);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    width: 6px;
    height: 5px;
    background: var(--paper);
    border-left: 1px solid var(--hairline-strong);
    border-right: 1px solid var(--hairline-strong);
  }
`;
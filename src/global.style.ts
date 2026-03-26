import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 5%;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  background: var(--electric);
  color: var(--navy-950);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s, transform 0.2s;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &.secondary {
    background: transparent;
    color: var(--color-text-primary);
    border: 1px solid var(--color-border-mid);

    &:hover {
      border-color: var(--blue-400);
      color: var(--blue-300);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Section = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

export const SectionLabel = styled.div`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--electric);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--electric);
  }
`;

export const SectionHeader = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

export const SectionDesc = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 560px;
  line-height: 1.8;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: var(--text-base);
  font-family: var(--font-body);
  color: var(--color-bg);
  background-color: var(--color-text-primary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: var(--color-text-secondary);
  }

  &.secondary {
    background-color: transparent;
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    
    &:hover {
      background-color: var(--color-surface);
      border-color: var(--color-text-secondary);
    }
  }
`;

export const Section = styled.section`
  padding: 8rem 0;
  position: relative;
`;

export const SectionHeader = styled.h2`
  margin-bottom: 3rem;
  color: var(--color-text-primary);
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 600;
  letter-spacing: -0.02em;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background-color: var(--color-accent);
    margin-top: 1rem;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem 2rem;
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  text-align: center;
  border-top: 1px solid var(--color-surface);
`;

export const SocialContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-secondary);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    padding: 0.75rem;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover, &:focus-visible {
      color: var(--color-bg);
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      transform: translateY(-2px);
    }
  }
`;

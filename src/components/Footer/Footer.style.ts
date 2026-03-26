import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid var(--color-border);
  padding: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const FooterText = styled.div`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
`;

export const FooterCopy = styled.div`
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
`;

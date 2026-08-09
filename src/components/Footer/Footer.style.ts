import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid var(--hairline-strong);
  padding: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  background: var(--paper);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const FooterText = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--ink-3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const FooterCopy = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  color: var(--ink-4);
  letter-spacing: 0.06em;
`;
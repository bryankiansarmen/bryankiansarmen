import styled from "styled-components";

export const ContactInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  color: var(--ink-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;

  &::before {
    content: '» ';
    color: var(--ink-4);
  }
`;

const fieldStyles = `
  background: var(--paper-raised);
  border: 1px solid var(--hairline-strong);
  padding: 0.85rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  border-radius: 0;

  &::placeholder {
    color: var(--ink-4);
  }

  &:focus {
    border-color: var(--ink-2);
    box-shadow: 0 0 0 3px var(--signal-glow);
  }
`;

export const FormInput = styled.input`
  ${fieldStyles}
`;

export const FormTextarea = styled.textarea`
  ${fieldStyles}
  min-height: 120px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  background: var(--signal-bg);
  color: var(--signal-ink);
  padding: 0.85rem 2rem;
  border: 1px solid var(--signal-bg);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, opacity 0.2s;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0;
  position: relative;

  &:hover {
    background: var(--paper-raised);
    color: var(--signal-bg);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StatusMessage = styled.div<{ $variant: 'success' | 'error' }>`
  margin-top: 0.5rem;
  padding: 1rem;
  text-align: center;
  font-size: 0.82rem;
  font-family: 'JetBrains Mono', monospace;
  border-radius: 0;
  border: 1px solid var(--hairline-strong);

  ${({ $variant }) => $variant === 'success' ? `
    background: var(--signal-bg);
    color: var(--signal-ink);
    border-color: var(--signal-bg);
  ` : `
    background: var(--fill-soft);
    color: var(--ink);
    border-color: var(--ink-2);
  `}
`;

/* Contact Info Panel — data sheet column */
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2rem;
  border: 1px solid var(--hairline-strong);
  background: var(--fill-soft);

  h3 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--ink-4);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 0.5rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px dashed var(--hairline);

  &:last-of-type {
    border-bottom: none;
  }
`;

export const ContactIconWrap = styled.div`
  width: 40px;
  height: 40px;
  background: var(--paper-raised);
  border: 1px solid var(--hairline-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--ink-3);
`;

export const ContactItemLabel = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  color: var(--ink-4);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.3rem;
`;

export const ContactItemValue = styled.span`
  font-size: 0.9rem;
  color: var(--ink);
  text-decoration: none;
  font-weight: 500;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border: 1px solid var(--hairline-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-3);
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  border-radius: 0;
  background: var(--paper-raised);

  &:hover {
    border-color: var(--signal-bg);
    color: var(--signal-bg);
    background: var(--signal-glow);
  }
`;
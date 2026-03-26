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
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormLabel = styled.label`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const fieldStyles = `
  background: var(--navy-800);
  border: 1px solid var(--color-border);
  border-radius: 3px;
  padding: 0.85rem 1rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-primary);
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    border-color: var(--blue-400);
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
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  background: var(--electric);
  color: var(--navy-950);
  padding: 0.85rem 2rem;
  border: none;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  width: 100%;
  text-align: center;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const StatusMessage = styled.div<{ $variant: 'success' | 'error' }>`
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  font-size: 0.85rem;

  ${({ $variant }) => $variant === 'success' ? `
    background-color: rgba(34, 197, 94, 0.1);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.2);
  ` : `
    background-color: rgba(244, 67, 54, 0.1);
    color: #f44336;
    border: 1px solid rgba(244, 67, 54, 0.2);
  `}
`;

/* Contact Info Panel */
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ContactIconWrap = styled.div`
  width: 40px;
  height: 40px;
  background: var(--electric-dim);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const ContactItemLabel = styled.div`
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.2rem;
`;

export const ContactItemValue = styled.span`
  font-size: 0.9rem;
  color: var(--blue-200);
  text-decoration: none;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--electric);
    color: var(--electric);
  }
`;

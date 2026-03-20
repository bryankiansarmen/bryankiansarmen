import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 3rem;
  border-radius: 8px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);

  button {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-family: var(--font-body);
    font-weight: 500;
    color: var(--color-text-primary);
    font-size: var(--text-sm);
    
    .required-indicator {
      color: var(--color-text-muted);
      font-weight: 400;
      margin-left: 0.25rem;
      font-size: var(--text-xs);
    }
  }
`;

const FormFieldStyles = `
  width: 100%;
  padding: 0.875rem 1rem;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px var(--color-accent-subtle);
  }

  &::placeholder {
    color: transparent;
  }
`;

export const Input = styled.input`
  ${FormFieldStyles}
`;

export const TextArea = styled.textarea`
  ${FormFieldStyles}
  resize: vertical;
  min-height: 120px;
`;

export const SuccessMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(34, 197, 94, 0.1);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 4px;
  text-align: center;
  font-size: var(--text-sm);
`;

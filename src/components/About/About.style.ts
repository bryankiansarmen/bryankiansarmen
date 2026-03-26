import styled from "styled-components";
import { motion } from "framer-motion";

/* About Layout — two column */
export const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* Photo placeholder */
export const ImageWrap = styled.div`
  position: relative;
`;

export const PhotoPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  background: var(--navy-800);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 320px;
    margin: 0 auto;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.04) 0%, transparent 60%);
  }
`;

export const PhotoInitials = styled.div`
  font-family: var(--font-heading);
  font-size: 5rem;
  font-weight: 800;
  color: var(--blue-300);
  opacity: 0.3;
  letter-spacing: -0.04em;
`;

export const PhotoCorner = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 40px;
  height: 40px;
  border-top: 2px solid var(--electric);
  border-left: 2px solid var(--electric);
`;

export const PhotoAccent = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 60%;
  height: 3px;
  background: var(--electric);
`;

/* About text */
export const AboutText = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 560px;
  margin-top: 1.2rem;

  strong {
    color: var(--color-text-primary);
    font-weight: 600;
  }
`;

/* Stats row */
export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const StatCard = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1.2rem 1rem;
  text-align: center;
`;

export const StatNumber = styled.div`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  color: var(--electric);
  line-height: 1;
  margin-bottom: 0.3rem;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

/* Skills Section */
export const SkillsSection = styled.div`
  margin-top: 6rem;
  padding-top: 5rem;
  border-top: 1px solid var(--color-border);
`;

export const SkillsCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 3.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCategoryCard = styled(motion.div)`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1.5rem;
  transition: border-color 0.3s;

  &:hover {
    border-color: var(--color-border-mid);
  }
`;

export const SkillCatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.2rem;
`;

export const SkillIcon = styled.div`
  width: 36px;
  height: 36px;
  background: var(--electric-dim);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export const SkillCatName = styled.div`
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-primary);
`;

export const SkillTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillTag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--blue-200);
  background: rgba(59, 145, 245, 0.1);
  border: 1px solid rgba(59, 145, 245, 0.2);
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.85rem;
  }
`;

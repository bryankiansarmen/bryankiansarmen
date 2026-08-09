import styled from "styled-components";
import { motion } from "framer-motion";

/* About Layout — two column datasheet */
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

/* Photo placeholder — plate card */
export const ImageWrap = styled.div`
  position: relative;
`;

export const PhotoPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  background: var(--paper-raised);
  border: 1px solid var(--hairline-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--hairline) 1px, transparent 1px),
      linear-gradient(90deg, var(--hairline) 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    max-width: 320px;
    margin: 0 auto;
  }
`;

export const PhotoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
  z-index: 1;
`;

export const PhotoCorner = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 40px;
  height: 40px;
  border-top: 2px solid var(--ink);
  border-left: 2px solid var(--ink);
  opacity: 0.6;
`;

export const PhotoAccent = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 60%;
  height: 3px;
  background: var(--ink);
  opacity: 0.25;
`;

/* About text */
export const AboutText = styled.p`
  font-size: 1rem;
  color: var(--ink-2);
  line-height: 1.8;
  max-width: 560px;
  margin-top: 1.2rem;

  strong {
    color: var(--ink);
    font-weight: 600;
  }
`;

/* Stats row — spec grid */
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
  background: var(--fill-soft);
  border: 1px solid var(--hairline-strong);
  padding: 1.2rem 1rem;
  text-align: left;
  position: relative;

  &::before {
    content: attr(data-index);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6rem;
    color: var(--ink-4);
    position: absolute;
    top: 0.55rem;
    right: 0.6rem;
    letter-spacing: 0.06em;
  }
`;

export const StatNumber = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0.3rem;
`;

export const StatLabel = styled.div`
  font-size: 0.72rem;
  color: var(--ink-3);
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

/* Skills Section — registry grid */
export const SkillsSection = styled.div`
  margin-top: 6rem;
  padding-top: 5rem;
  border-top: 1px solid var(--hairline-strong);
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
  background: var(--paper-raised);
  border: 1px solid var(--hairline);
  padding: 1.5rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: var(--hairline-strong);
    box-shadow: 0 1px 0 var(--hairline-soft), 0 16px 40px -28px rgba(0, 0, 0, 0.4);
  }
`;

export const SkillCatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.2rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--hairline);
`;

export const SkillIcon = styled.div`
  width: 36px;
  height: 36px;
  background: var(--fill-soft);
  border: 1px solid var(--hairline-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--ink-2);
`;

export const SkillCatName = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink);
`;

export const SkillRef = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  color: var(--ink-4);
  margin-left: auto;
  letter-spacing: 0.08em;
`;

export const SkillTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillTag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--ink-2);
  background: var(--fill-soft);
  border: 1px solid var(--hairline);
  padding: 0.3rem 0.7rem;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: border-color 0.2s, color 0.2s;

  svg {
    font-size: 0.85rem;
    color: var(--ink-3);
  }

  &:hover {
    border-color: var(--signal-bg);
    color: var(--ink);
  }
`;
import styled from "styled-components";
import { motion } from "framer-motion";

export const FixedNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--paper);
  border-bottom: 1px solid var(--hairline);
  transition: background 0.35s ease, border-color 0.35s ease;
`;

export const Nav = styled.nav`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 1.1rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const NavBrand = styled.a`
  display: flex;
  align-items: baseline;
  text-decoration: none;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  color: var(--ink);
  transition: color 0.2s;

  .dot {
    color: var(--ink-4);
  }
`;

export const DesktopNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.25rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  a {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 400;
    color: var(--ink-3);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s;
    position: relative;

    &::before {
      content: attr(data-num);
      color: var(--ink-4);
      font-size: 0.62rem;
      margin-right: 0.5em;
    }

    &:hover {
      color: var(--ink);
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ThemeToggle = styled.button`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--hairline-strong);
  color: var(--ink);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  border-radius: 0;

  &:hover {
    background: var(--signal-bg);
    color: var(--signal-ink);
    border-color: var(--signal-bg);
  }

  @media (max-width: 640px) {
    display: inline-flex;
  }
`;

export const NavCta = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--signal-bg);
  border: 1px solid var(--signal-bg);
  padding: 0.5rem 1.1rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  border-radius: 0;

  &:hover {
    background: var(--signal-bg);
    color: var(--signal-ink);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--ink);
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileNavOverlay = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: var(--paper);
    z-index: 999;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
`;

export const MobileNavItem = styled(motion.li)`
  a {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.9rem, 6vw, 2.4rem);
    color: var(--ink);
    text-decoration: none;
    font-weight: 600;

    &:hover,
    &:active {
      color: var(--ink-3);
    }

    &.cta {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.9rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--signal-ink);
      background: var(--signal-bg);
      padding: 0.75rem 1.5rem;
      border-radius: 0;
    }
  }
`;
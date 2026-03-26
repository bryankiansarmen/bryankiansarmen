import styled from "styled-components";
import { motion } from "framer-motion";

export const FixedNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(3, 11, 24, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  transition: all 0.3s ease;
`;

export const Nav = styled.nav`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 1.2rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBrand = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.2rem;
    letter-spacing: 0.05em;
    color: var(--color-text-primary);

    span {
      color: var(--color-text-primary);
    }

    /* The dot is electric */
    &::after {
      content: none;
    }
  }

  /* Color the dot character */
  a span + * {
    color: var(--electric);
  }
`;

export const DesktopNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  a {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-text-secondary);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.2s;
    position: relative;

    &::before {
      content: attr(data-num);
      color: var(--electric);
      font-size: 0.65rem;
      margin-right: 0.4em;
      opacity: 0.7;
    }

    &:hover {
      color: var(--color-text-primary);
    }
  }
`;

export const NavCta = styled.a`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--electric);
  border: 1px solid var(--electric);
  padding: 0.5rem 1.2rem;
  text-decoration: none;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--electric);
    color: var(--navy-950);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--color-text-primary);
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
    background-color: var(--navy-950);
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
    font-family: var(--font-heading);
    font-size: var(--text-3xl);
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 600;
    
    &:hover, &:active {
      color: var(--electric);
    }

    &.cta {
      font-family: var(--font-mono);
      font-size: 0.9rem;
      color: var(--electric);
      border: 1px solid var(--electric);
      padding: 0.75rem 1.5rem;
      border-radius: 2px;
    }
  }
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const FixedNav = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-surface);
  z-index: 1000;
  transition: all 0.3s ease;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
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
    font-weight: 700;
    font-size: var(--text-xl);
    letter-spacing: -0.02em;
    color: var(--color-text-primary);
    
    span {
      color: var(--color-accent);
      margin-right: 0.25rem;
    }
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
    font-family: var(--font-body);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 0;
      bottom: 0;
      left: 0;
      background-color: var(--color-accent);
      transition: width 0.3s ease;
    }

    &:hover, &[aria-current="page"] {
      color: var(--color-text-primary);
      &::after {
        width: 100%;
      }
    }
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
    background-color: var(--color-bg);
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
      color: var(--color-accent);
    }
  }
`;

import { useState, useEffect } from "react";
import * as Styled from "./Navbar.style";
import { Menu, X } from "lucide-react";
import { AnimatePresence, Variants } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#project" },
  { label: "Contact", href: "#contact" }
];

const menuVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" as const,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeIn" as const }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Styled.FixedNav>
      <Styled.Nav aria-label="Main Navigation">
        <Styled.NavBrand>
          <a href="#home" aria-label="Kian - Home" onClick={closeMenu}>
            <span>Kian</span>.dev
          </a>
        </Styled.NavBrand>

        {/* Desktop Menu */}
        <Styled.DesktopNavList>
          {NAV_LINKS.map(link => (
            <Styled.NavItem key={link.label}>
              <a href={link.href}>{link.label}</a>
            </Styled.NavItem>
          ))}
        </Styled.DesktopNavList>

        {/* Mobile Hamburger Button */}
        <Styled.MobileMenuButton 
          onClick={toggleMenu} 
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Styled.MobileMenuButton>
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <Styled.MobileNavOverlay
              id="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Styled.MobileNavList>
                {NAV_LINKS.map(link => (
                  <Styled.MobileNavItem key={link.label} variants={itemVariants}>
                    <a href={link.href} onClick={closeMenu}>{link.label}</a>
                  </Styled.MobileNavItem>
                ))}
              </Styled.MobileNavList>
            </Styled.MobileNavOverlay>
          )}
        </AnimatePresence>

      </Styled.Nav>
    </Styled.FixedNav>
  );
};

export default Navbar;

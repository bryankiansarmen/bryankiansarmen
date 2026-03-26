import { useState, useEffect } from "react";
import * as Styled from "./Navbar.style";
import { Menu, X } from "lucide-react";
import { AnimatePresence, Variants } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Contact", href: "#contact", num: "03" }
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
            <span>BK</span>.
          </a>
        </Styled.NavBrand>

        {/* Desktop Menu */}
        <Styled.DesktopNavList>
          {NAV_LINKS.map(link => (
            <Styled.NavItem key={link.label}>
              <a href={link.href} data-num={link.num}>{link.label}</a>
            </Styled.NavItem>
          ))}
        </Styled.DesktopNavList>

        <Styled.NavCta href="#contact">Get in touch</Styled.NavCta>

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
                <Styled.MobileNavItem variants={itemVariants}>
                  <a href="#contact" onClick={closeMenu} className="cta">Get in touch</a>
                </Styled.MobileNavItem>
              </Styled.MobileNavList>
            </Styled.MobileNavOverlay>
          )}
        </AnimatePresence>

      </Styled.Nav>
    </Styled.FixedNav>
  );
};

export default Navbar;

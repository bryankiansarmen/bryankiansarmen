import { useState, useEffect } from "react";
import * as Styled from "./Navbar.style";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, Variants } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Contact", href: "#contact", num: "03" }
];

const menuVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeIn" as const }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const getInitialTheme = (): "light" | "dark" => {
  if (typeof document === "undefined") return "dark";
  const saved = localStorage.getItem("bk-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bk-theme", theme);
  }, [theme]);

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
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const otherTheme = theme === "dark" ? "light" : "dark";

  return (
    <Styled.FixedNav>
      <Styled.Nav aria-label="Main Navigation">
        <Styled.NavBrand href="#home" aria-label="Bryan Kian Sarmen - Home">
          <span>BK</span><span className="dot">.</span>
        </Styled.NavBrand>

        {/* Desktop Menu */}
        <Styled.DesktopNavList>
          {NAV_LINKS.map(link => (
            <Styled.NavItem key={link.label}>
              <a href={link.href} data-num={link.num}>{link.label}</a>
            </Styled.NavItem>
          ))}
        </Styled.DesktopNavList>

        <Styled.NavActions>
          <Styled.ThemeToggle
            onClick={toggleTheme}
            aria-label={`Switch theme to ${otherTheme} mode`}
            title={`Switch to ${otherTheme} mode`}
          >
            {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </Styled.ThemeToggle>

          <Styled.NavCta href="#contact">Get in touch</Styled.NavCta>
        </Styled.NavActions>

        {/* Mobile Hamburger Button */}
        <Styled.MobileMenuButton
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
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
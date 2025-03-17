import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { NavbarProps } from "../utils/type";
import { navItems } from "../utils/utils";

// A small wrapper for our icon animations
const IconWrapper = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  margin-right: 8px; /* space between icon and label */
  color: inherit; /* inherit text color */
`;

const NavbarContainer = styled(motion.nav)<NavbarProps>`
  position: fixed;
  top: 0;
  width: 100%;
  color: ${({ scrolled, theme }) => (scrolled ? theme.text : "transparent")};
  background: ${({ scrolled, theme }) =>
    scrolled ? theme.accent : "transparent"};
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: background 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.a)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  position: relative;
  cursor: pointer;
  transition: color 0.3s;

  display: inline-flex; /* So icon & label align horizontally */
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.text};
  }

  &.active {
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.text};
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.accent};
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MobileMenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background: ${({ theme }) => theme.background};
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MobileNavItem = styled(motion.a)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;
  display: inline-flex; /* icon + label in one row */
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.accent};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.text};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.accent};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <h2>👩🏾‍💻 Suliat</h2>
      <RightContainer>
        {/* Desktop Links */}
        <NavLinks>
          {navItems.map((item, idx) => (
            <NavItem
              key={item.href}
              href={item.href}
              // Simple hover animation on the entire link
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={window.location.hash === item.href ? "active" : ""}
            >
              {/* Icon with its own hover animation */}
              <IconWrapper
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </IconWrapper>
              {item.label}
            </NavItem>
          ))}
        </NavLinks>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Mobile Menu Icon (Hamburger) */}
        <MobileMenuIcon onClick={() => setMenuOpen(true)}>☰</MobileMenuIcon>
      </RightContainer>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenuContainer
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setMenuOpen(false)}>×</CloseButton>

            <MobileNavLinks>
              {navItems.map((item, index) => (
                <MobileNavItem
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  className={window.location.hash === item.href ? "active" : ""}
                  whileHover={{ scale: 1.05 }}
                >
                  <IconWrapper
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </IconWrapper>
                  {item.label}
                </MobileNavItem>
              ))}
            </MobileNavLinks>
          </MobileMenuContainer>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;

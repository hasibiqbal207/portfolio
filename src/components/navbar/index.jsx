import React, { useState, useEffect, useRef } from "react";
import { Nav, NavbarContainer, ButtonContainer, MobileIcon } from "./styles";
import { FaBars } from "react-icons/fa";

import HomeLink from "./HomeLink";
import NavLinks from "./NavLinks";
import MobileMenuComponent from "./MobileMenu";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSelector from "./LanguageSelector";
const Navbar = ({darkMode, setDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        {/* Home Button to start from the beggining */}
        <HomeLink />

        <MobileIcon ref={buttonRef}>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>

        {/* Navigation Menu */}
        <NavLinks />

        <ButtonContainer>

        {/* Dark & Light Theme Switcher */}
        <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>

        {/* Language Selector */}
        {/* <LanguageSelector /> */}

        </ButtonContainer>

        {/* Navigation Menu on Mobile Device */}
        <MobileMenuComponent menuRef={menuRef} isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} setDarkMode={setDarkMode}/>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

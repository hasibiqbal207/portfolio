import React, { useState } from "react";
import { Nav, NavbarContainer, ButtonContainer, MobileIcon } from "./styles";
import { FaBars } from "react-icons/fa";

import HomeLink from "./HomeLink";
import NavLinks from "./NavLinks";
import MobileMenuComponent from "./MobileMenu";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSelector from "./LanguageSelector";
const Navbar = ({darkMode, setDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        {/* Home Button to start from the beggining */}
        <HomeLink />

        <MobileIcon>
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
        <MobileMenuComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

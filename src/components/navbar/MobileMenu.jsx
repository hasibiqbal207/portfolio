import React from "react";
import { MobileMenu, MobileLink, MobileMenuItems } from "./styles";
import ThemeSwitch from "./ThemeSwitch";
import { Scale } from "@mui/icons-material";

const MobileMenuComponent = ({ menuRef, isOpen, setIsOpen, darkMode, setDarkMode }) => {
  return (
    isOpen && (
      <MobileMenu ref={menuRef} isOpen={isOpen}>
        <MobileLink
          href="#about"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          About
        </MobileLink>

        <MobileLink
          href="#skills"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Skills
        </MobileLink>

        <MobileLink
          href="#projects"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Projects
        </MobileLink>

        <MobileLink
          href="#academics"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Academics
        </MobileLink>

        {/* <MobileLink
          href="#blog"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Blog
        </MobileLink> */}

        <MobileLink
          href="#contact"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Contact
        </MobileLink>

        <MobileMenuItems>
          <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>
        </MobileMenuItems>

      </MobileMenu>
    )
  );
};

export default MobileMenuComponent;

import React from "react";
import { MobileMenu, MobileLink } from "./styles";

const MobileMenuComponent = ({ isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <MobileMenu isOpen={isOpen}>
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
      </MobileMenu>
    )
  );
};

export default MobileMenuComponent;

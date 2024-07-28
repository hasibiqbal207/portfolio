import React from "react";
import { NavItems, NavLink } from "./styles";

const NavLinks = () => (
  <NavItems>
    <NavLink href="#about">About</NavLink>
    <NavLink href="#academics">Academics</NavLink>
    <NavLink href="#skills">Skills</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    {/* <NavLink href="#blog">Blog</NavLink> */}
    <NavLink href="#contact">Contact</NavLink>
  </NavItems>
);

export default NavLinks;

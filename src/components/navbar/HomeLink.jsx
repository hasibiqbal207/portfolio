import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLogo } from "./styles";

const HomeLink = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavLogo onClick={scrollToTop}>
      <FaHome 
        size="1.5em" />
    </NavLogo>
  );
};

export default HomeLink;

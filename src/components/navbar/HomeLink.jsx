import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLogo } from "./styles";

const HomeLink = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavLogo>
      <FaHome
        onClick={scrollToTop}
        style={{
          display: "flex",
          color: "white",
          cursor: "pointer",
          scale: "1.5",
        }}
      />
    </NavLogo>
  );
};

export default HomeLink;

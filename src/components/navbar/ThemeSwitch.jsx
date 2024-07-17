import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from '@mui/material/Switch';

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <IconButton
      color="inherit"
      onClick={handleDarkModeToggle}
      aria-label="toggle dark mode"
    >
      <LightModeIcon />
      <Switch
        checked={darkMode}
        onChange={handleDarkModeToggle}
        inputProps={{ "aria-label": "toggle dark mode" }}
        color="default"
      />
      <DarkModeIcon />
    </IconButton>
  );
};

export default ThemeSwitch;

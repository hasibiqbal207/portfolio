import React, { useState } from "react";
import { styled } from '@mui/material/styles';

import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from '@mui/material/Switch';
import {CustomLightModeIcon, CustomDarkModeIcon} from './styles';

import theme from "../../theme";


const ThemeSwitch = ({darkMode, setDarkMode}) => {
  // const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <IconButton
      color="inherit"
      onClick={handleDarkModeToggle}
      aria-label="toggle dark mode"
    >
      <CustomLightModeIcon />
      <Switch
        checked={darkMode}
        onChange={handleDarkModeToggle}
        inputProps={{ "aria-label": "toggle dark mode" }}
        color="default"
      />
      <CustomDarkModeIcon />
    </IconButton>
  );
};

export default ThemeSwitch;

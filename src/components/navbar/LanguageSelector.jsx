import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 40 }}>
      <Select
        value={language}
        onChange={handleLanguageChange}
        label="Language"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        style={{ color: "white" }}
      >
        <MenuItem value="en">En</MenuItem>
        <MenuItem value="de">De</MenuItem>
        {/* Add more languages as needed */}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;

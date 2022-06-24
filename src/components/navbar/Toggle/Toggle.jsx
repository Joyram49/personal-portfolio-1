import React from "react";
import "./toggle.css";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";

import { useContext } from "react";
import { themeContext } from "../../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkmode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className='toggle' onClick={handleClick}>
      <FiSun />
      <HiMoon />
      <button
        className='toggle_btn'
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></button>
    </div>
  );
};

export default Toggle;

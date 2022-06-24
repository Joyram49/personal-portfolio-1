import React from "react";
import "./experience.css";

import { useContext } from "react";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkmode;

  return (
    <div className='experience'>
      <div className='achievement'>
        <div
          className='exp_circle'
          style={darkMode ? { color: "var(--orange)" } : { color: "" }}
        >
          8+
        </div>
        <h4>years</h4>
        <h3>Experience</h3>
      </div>
      <div className='achievement'>
        <div
          className='exp_circle'
          style={darkMode ? { color: "var(--orange)" } : { color: "" }}
        >
          20+
        </div>
        <h4>completed</h4>
        <h3>Projects</h3>
      </div>
      <div className='achievement'>
        <div
          className='exp_circle'
          style={darkMode ? { color: "var(--orange)" } : { color: "" }}
        >
          5+
        </div>
        <h4>companies</h4>
        <h3>Work</h3>
      </div>
    </div>
  );
};

export default Experience;

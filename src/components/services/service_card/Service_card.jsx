import React from "react";
import "./service_card.css";

import { themeContext } from "../../../Context";
import { useContext } from "react";

const Service_card = ({ image, title, text }) => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkmode;

  return (
    <div
      className='service_card'
      style={darkMode ? { background: "#c1c1c1" } : { background: "" }}
    >
      <img src={image} />
      <h3>{title}</h3>
      <p>{text}</p>
      <button>Learn More</button>
    </div>
  );
};

export default Service_card;

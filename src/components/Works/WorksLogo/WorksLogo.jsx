import React from "react";
import "./workslogo.css";

const WorksLogo = ({ image }) => {
  return (
    <div className='works_logo'>
      <img src={image} alt='logo' />
    </div>
  );
};

export default WorksLogo;

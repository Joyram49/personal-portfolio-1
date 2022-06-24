import React from "react";
import "./footer.css";
import Wave from "../../assets/wave.png";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt='footer-image' />
      <p>joyram2015@gmail.com</p>
      <div className='footer_icons'>
        <BsFacebook className='footer_icon' />
        <BsInstagram className='footer_icon' />
        <BsGithub className='footer_icon' />
      </div>
    </div>
  );
};

export default Footer;

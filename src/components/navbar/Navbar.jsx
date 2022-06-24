import React from "react";
import "./navbar.css";
import Toggle from "./Toggle/Toggle";
import { useContext, useState } from "react";
import { themeContext } from "../../Context";

import { Link } from "react-scroll/modules";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkmode;

  const [showToggle, setShowToggle] = useState(false);

  return (
    <div className='navbar' id='Navbar'>
      <div className='nav_logo'>
        <a href='#' style={darkMode ? { color: "white" } : { color: "" }}>
          RD
        </a>
        <Toggle />
      </div>
      <ul className={showToggle ? "nav_list responsive_nav_list" : "nav_list"}>
        <li className='nav_item'>
          <Link
            spy={true}
            to='Navbar'
            smooth={true}
            activeClass='activeClass'
            href='#'
            data-content='Home'
            style={darkMode ? { color: "white" } : { color: "" }}
            onClick={() => setShowToggle(!showToggle)}
          >
            Home
          </Link>
        </li>
        <li className='nav_item'>
          <Link
            spy={true}
            to='Services'
            smooth={true}
            href='#Services'
            data-content='Services'
            style={darkMode ? { color: "white" } : { color: "" }}
            onClick={() => setShowToggle(!showToggle)}
          >
            Services
          </Link>
        </li>
        <li className='nav_item'>
          <Link
            spy={true}
            to='Works'
            smooth={true}
            href='#Works'
            data-content='Works'
            style={darkMode ? { color: "white" } : { color: "" }}
            onClick={() => setShowToggle(!showToggle)}
          >
            Works
          </Link>
        </li>
        <li className='nav_item'>
          <Link
            spy={true}
            to='Portfolio'
            smooth={true}
            href='#Portfolio'
            data-content='Portfolio'
            style={darkMode ? { color: "white" } : { color: "" }}
            onClick={() => setShowToggle(!showToggle)}
          >
            Portfolio
          </Link>
        </li>
        <li className='nav_item'>
          <Link
            spy={true}
            to='Testimonial'
            smooth={true}
            data-content='Testimonial'
            style={darkMode ? { color: "white" } : { color: "" }}
            onClick={() => setShowToggle(!showToggle)}
          >
            Testimonial
          </Link>
        </li>
        <Link
          spy={true}
          to='Contact'
          smooth={true}
          className='btn nav_btn'
          onClick={() => setShowToggle(!showToggle)}
        >
          Contact
        </Link>
      </ul>

      <div className='hamberger_menu'>
        <a href='#' onClick={() => setShowToggle(!showToggle)}>
          {showToggle ? (
            <CgClose style={darkMode ? { color: "white" } : { color: "" }} />
          ) : (
            <GiHamburgerMenu
              style={darkMode ? { color: "white" } : { color: "" }}
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default Navbar;

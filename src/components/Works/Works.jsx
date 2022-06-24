import React from "react";
import "./works.css";
import Upwork from "../../assets/Upwork.png";
import Fiverr from "../../assets/fiverr.png";
import Facebook from "../../assets/Facebook.png";
import Shopify from "../../assets/Shopify.png";
import Amazon from "../../assets/amazon.png";

import WorksLogo from "./WorksLogo/WorksLogo";
import { Link } from "react-scroll/modules";

import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className='works' id='Works'>
      <div className='works_left'>
        <h2>Works For All these</h2>
        <h2>Brands & Clients</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eum pariatur voluptas neque, officia nisi, cupiditate commodi iusto
          explicabo reiciendis praesentium blanditiis dolores et rerum dolorem
          iure illo ratione itaque!
        </p>
        <Link spy={true} to='Contact' smooth={true} className='btn works_btn'>
          Hire Me
        </Link>
      </div>
      <div className='works_right'>
        <motion.div
          className='white_circle'
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div>
            <WorksLogo image={Upwork} />
          </div>
          <div>
            <WorksLogo image={Fiverr} />
          </div>
          <div>
            <WorksLogo image={Facebook} />
          </div>
          <div>
            <WorksLogo image={Shopify} />
          </div>
          <div>
            <WorksLogo image={Amazon} />
          </div>
        </motion.div>
        <div className='blue_circle'></div>
        <div className='yellow_circle'></div>
        <div
          className='blur'
          style={{
            position: "absolute",
            background: "#c1f5ff",
            left: "-55rem",
            top: "17rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Works;

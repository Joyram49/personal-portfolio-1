import React from "react";
import "./services.css";
import CareEmoji from "../../assets/heartemoji.png";
import GlassEmoji2 from "../../assets/glasses.png";
import HumbleEmoji from "../../assets/humble.png";

import Service_card from "./service_card/Service_card";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className='service' id='Services'>
      <div className='service_left'>
        <h1>My Awesome</h1>
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id
          amet, adipisci eveniet explicabo dolor cumque aspernatur? Sit, ex
          repellat.
        </p>
        <button className='btn'>Download CV</button>
      </div>
      <div className='service_right'>
        <motion.div
          initial={{ right: "1%" }}
          whileInView={{ right: "14%" }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Service_card
            image={CareEmoji}
            title='Design'
            text='Figma, Sketch, PhotoShop, Adobe Illustrator, Adobe Xd'
          />
        </motion.div>
        <motion.div
          initial={{ left: "0%" }}
          whileInView={{ left: "10%" }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Service_card
            image={GlassEmoji2}
            title='Developer'
            text='HTML, CSS, Javascript, React, Node JS, Express'
          />
        </motion.div>
        <motion.div
          initial={{ right: "1%" }}
          whileInView={{ right: "14%" }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Service_card
            image={HumbleEmoji}
            title='UI/UX'
            text='lorem ipsum dolor site amet some dummy text'
          />
        </motion.div>
        <div
          className='blur'
          style={{
            position: "absolute",
            background: "var(--purple)",
            right: "3rem",
            top: "8rem",
          }}
        ></div>
        <div
          className='blur'
          style={{
            position: "absolute",
            background: "#c1f5ff",
            left: "-55rem",
            top: "14rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

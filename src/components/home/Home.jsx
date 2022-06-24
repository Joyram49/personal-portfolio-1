import React from "react";
import "./home.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import Boy from "../../assets/boy.png";
import glassEmoji1 from "../../assets/glassesimoji.png";
import Crown from "../../assets/crown.png";
import ThumbsUp from "../../assets/thumbup.png";

import ContentCard from "./ContentCard/ContentCard";

import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='home_left'>
        <div className='left_desc'>
          <h1>Hey! I'm</h1>
          <h1>Andrew Thomas</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            doloremque voluptatem facilis cupiditate sed alias odio officiis
            libero dolor mollitia tempora illum nam iusto in dicta maiores
            quaerat fugit asperiores!
          </p>
          <Link spy={true} to='Contact' smooth={true} className='btn home_btn'>
            Hire Me
          </Link>
        </div>
        <div className='home_icons'>
          <img src={Github} alt='github' />
          <img src={Instagram} alt='instgram' />
          <img src={LinkedIn} alt='linkedin' />
        </div>
      </div>
      <div className='home_right'>
        <div className='right_content'>
          <img src={Vector1} alt='vector1' />
          <img src={Vector2} alt='vector2' />
          <img src={Boy} alt='Boy' />
          <motion.img
            initial={{ left: "-14%" }}
            whileInView={{ left: "5%" }}
            transition={{ duration: 2, type: "spring" }}
            src={glassEmoji1}
            alt='glassEmoji'
          />
          <motion.div
            initial={{ right: "-10%" }}
            whileInView={{ right: "2%" }}
            transition={{ duration: 2, type: "spring" }}
          >
            <ContentCard image={Crown} text1='Web' text2='Developer' />
          </motion.div>
          <motion.div
            initial={{ left: "1%" }}
            whileInView={{ left: "21%" }}
            transition={{ duration: 2, type: "spring" }}
          >
            <ContentCard image={ThumbsUp} text1='Best Award' text2='Design' />
          </motion.div>
          <div className='blur'></div>
          <div
            className='blur'
            style={{ background: "#c1f5ff", left: "-15rem", top: "18rem" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

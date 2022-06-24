import React from "react";
import "./portfolio.css";
import Ecommerce from "../../assets/ecommerce.png";
import Hoc from "../../assets/hoc.png";
import MusicApp from "../../assets/musicapp.png";
import Sidebar from "../../assets/sidebar.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
      <div className='portfolio_heading'>
        <h2>Recent Projects</h2>
        <h3>Portfolio</h3>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio_slider'
      >
        <SwiperSlide>
          <img src={Ecommerce} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Hoc} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Sidebar} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={MusicApp} />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

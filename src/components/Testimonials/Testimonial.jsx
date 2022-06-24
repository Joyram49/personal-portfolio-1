import React from "react";
import "./testimonial.css";
import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import Profile3 from "../../assets/profile3.jpg";
import Profile4 from "../../assets/profile4.jpg";
import Profile5 from "../../assets/profile5.jpg";
import Profile6 from "../../assets/profile6.jpg";

import { useContext } from "react";
import { themeContext } from "../../Context";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const clientReview = [
  {
    id: 1,
    image: Profile1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus repellat similique nostrum! Sit quidem minima ex aliquid beatae, quod adipisci mollitia ea rerum possimus, repellat culpa eligendi, laudantium sapiente libero blanditiis. Eius ut hic dignissimos corrupti",
  },
  {
    id: 2,
    image: Profile2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus repellat similique nostrum! Sit quidem minima ex aliquid beatae, quod adipisci mollitia ea rerum possimus, repellat culpa eligendi, laudantium sapiente libero blanditiis. Eius ut hic dignissimos corrupti",
  },
  {
    id: 3,
    image: Profile3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus repellat similique nostrum! Sit quidem minima ex aliquid beatae, quod adipisci mollitia ea rerum possimus, repellat culpa eligendi, laudantium sapiente libero blanditiis. Eius ut hic dignissimos corrupti",
  },
  {
    id: 4,
    image: Profile4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus repellat similique nostrum! Sit quidem minima ex aliquid beatae, quod adipisci mollitia ea rerum possimus, repellat culpa eligendi, laudantium sapiente libero blanditiis. Eius ut hic dignissimos corrupti",
  },
  {
    id: 5,
    image: Profile5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus repellat similique nostrum! Sit quidem minima ex aliquid beatae, quod adipisci mollitia ea rerum possimus, repellat culpa eligendi, laudantium sapiente libero blanditiis. Eius ut hic dignissimos corrupti",
  },
  {
    id: 6,
    image: Profile6,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus repellat similique nostrum! Sit quidem minima ex aliquid beatae, quod adipisci mollitia ea rerum possimus, repellat culpa eligendi, laudantium sapiente libero blanditiis. Eius ut hic dignissimos corrupti",
  },
];

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkmode;

  return (
    <div className='testimonial' id='Testimonial'>
      <h1>
        Clients alwayes get <span>Exceptional Work</span> from me....
      </h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clientReview.map(({ id, image, review }) => {
          return (
            <SwiperSlide key={id}>
              <div className='testimonial_card'>
                <div>
                  <img src={image} alt='person' />
                </div>
                <p style={darkMode ? { color: "white" } : { color: "" }}>
                  {review}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className='blur'
        style={{
          position: "absolute",
          background: "var(--purple)",
          right: "3rem",
          top: "12rem",
        }}
      ></div>
      <div
        className='blur'
        style={{
          position: "absolute",
          background: "var(--skyBlue)",
          top: "6rem",
          left: "10rem",
        }}
      ></div>
    </div>
  );
};

export default Testimonial;

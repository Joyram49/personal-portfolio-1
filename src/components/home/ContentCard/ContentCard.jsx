import React from "react";
import "./contentCard.css";

const ContentCard = ({ image, text1, text2 }) => {
  return (
    <div className='content_card'>
      <img src={image} />
      <div className='content_card_title'>
        <h2>{text1}</h2>
        <h2>{text2}</h2>
      </div>
    </div>
  );
};

export default ContentCard;

import React from "react";
import Image from "next/image";
import posterImg from "../../Assets/Posterr.png";
import "./Poster.css";
const Poster = () => {
  return (
    <div>
      <div className="image-wrapper" style={
        {
          backgroundImage: `url(${posterImg.src})`,
          backgroundPosition: 'centre',
          backgroundAttachment: 'fixed'
        }
      }>
      </div>
    </div>
  );
};

export default Poster;

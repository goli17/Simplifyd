import React from "react";
import Image from "next/image";
import posterImg from "../../Assets/Posterr.png";
import "./Poster.css";
const Poster = () => {
  return (
    <div>
      <div className="image-wrapper">
        <Image
          src={posterImg}
          alt="poster image"
          width={"auto"}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Poster;

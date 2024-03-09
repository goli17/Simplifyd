import React from "react";
import "./AboutUs.css";
import Image from "next/image";
import { AboutusData } from "./Aboutdata";
const AboutUs = () => {
  return (
    <>
      <div className="About">
        <div className="heading">
          <div className="heading-content">
            <p>Sup</p>
          </div>
        </div>
        <div className="About-img-content">
          {AboutusData.map((item, id) => (
            <div className="About-img" key={id}>
              <div
                className="img"
                style={{
                  backgroundColor: "#dfecff",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              >
                <Image
                  src={item.image.src}
                  width={400}
                  height={350}
                  layout="responsive"
                />
              </div>
              <div className="AboutUs-content">
                <p>{item?.title}</p>
                <span>{item?.position}</span>
                <div className="discription">{item?.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;

import React from "react";
import "./AboutUs.css";
import Image from "next/image";
import { AboutusData } from "./Aboutdata";
import { LinkSvg } from "@/Assets/svg";
const AboutUs = () => {
  const backgroundColors = ["#DFECFF", "#FFDCEF", "#FFF4DF"];

  return (
    <div className="About">
      <div className="heading">
        <div className="heading-content">
          <h2>Sup</h2>
        </div>
      </div>
      <div className="About-img-content">
        {AboutusData.map((item, id) => (
          <div className="About-img" key={id}>
            <div
              className="img"
              style={{
                backgroundColor: backgroundColors[id % backgroundColors.length], // Select background color based on index
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
              <h4>
                {item?.title}{" "}
                {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="#0A66C2"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </span> */}
              </h4>
              <span>{item?.position}</span>
              <div className="discription">{item?.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

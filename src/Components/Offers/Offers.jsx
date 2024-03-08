import React from "react";
import Image from "next/image";
import "./Offer.css";
import { table } from "./data";
import Offer1_img from "../../Assets/offer1.png";

const Offers = () => {
  return (
    <div className="offer-container">
      {table?.map((item, idx) => (
        <div className="Offers" key={idx}>
          <div className="Offers-one">
            <div className="Offers-one-number">
              <h1>{item.id}</h1>
            </div>
            <div className="Offer-content-img">
              <div className="Offers-one-content">
                <h4>{item?.title}</h4>
                <h3>{item?.breif}</h3>
                <p>{item.description}</p>
              </div>

              <div className="Offer-one-img">
                <Image
                  src={item.image}
                  alt="Offer image"
                  width={100}
                  height={111}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="button-cont">
        <button className="button">Book a Call</button>
      </div>
    </div>
  );
};

export default Offers;

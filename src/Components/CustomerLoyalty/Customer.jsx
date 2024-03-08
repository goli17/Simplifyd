import React from "react";
import "./Customer.css";
import Image from "next/image";
import background_img from "../../Assets/background.png";
const Customer = () => {
  return (
    <>
      <div className="Customer">
        <div className="Customer-heading">
          <p>
            Customers Loyalty and
            <br /> Satisfaction
          </p>
        </div>
        <div className="Customer-button">
          <button>Book a Call</button>
        </div>
      </div>
    </>
  );
};

export default Customer;

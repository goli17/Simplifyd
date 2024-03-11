import React from "react";
import "./Hero.css";
import { GoArrowRight } from "react-icons/go";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <h2> Let's create great products together.</h2>
        </div>
        <div className="hero-right">
          <p>
            We help businesses grow, launch products and build enduring
            relationships with our communities.We help businesses grow, launch
            products.
          </p>
          <button>Book a call</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

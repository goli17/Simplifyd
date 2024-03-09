import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Logo } from "@/Assets/svg";
const Footer = () => {
  return (
    <>
      {" "}
      <footer className="footer">
        <div className="footer-left">
          <Logo />
        </div>
        <div className="footer-right">
          <div className="content">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Careers</p>
          </div>
          <div className="icons">
            {/* <span>
              <CiFacebook />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <FaTwitter />
            </span> */}
            <span>
              <CiLinkedin />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

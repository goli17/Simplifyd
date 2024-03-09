"use client";
import { Logo } from "@/Assets/svg";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h4>
           <Logo/>
          </h4>
        </div>
        <div className={`nav-items ${showMenu ? "show" : ""}`}>
          <ul className="items">
            <li>Home</li>
            <li>About us</li>
            <li>What We Do</li>
            <li>Media</li>
            {showMenu ? <li>Contact us</li> : <button>Contact us</button>}
          </ul>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${showMenu ? "animate" : ""}`}></div>
          <div className={`bar ${showMenu ? "animate" : ""}`}></div>
          <div className={`bar ${showMenu ? "animate" : ""}`}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

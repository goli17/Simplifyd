"use client"
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h4>Logo</h4>
        </div>
        {/* Render the hamburger menu and navigation options for screens smaller than 500px */}
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'animate' : ''}`}></div>
        </div>
        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <ul className="items">
            <li>Home</li>
            <li>About us</li>
            <li>What We Do</li>
            <li>Media</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;


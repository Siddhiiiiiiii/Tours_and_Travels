import React, { useState } from 'react';
import '../CSS/Navbar.css';
import logo from '../images/logo.png'

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <div className="navbar">
      <div className="logo">
        {/* Replace 'your_logo.png' with the path to your logo image */}
        <img src={logo}
        alt='Siddhesh Tours and Travels' />
        {/* <span> Siddhesh TOURS AND TRAVELS </span> */}
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/Destinations">Destinations</a>
          {showDropdown && (
            <div className="dropdown-content">
              <a href="/Family">Family Tours</a>
              <a href="/Honeymoon">Honeymoon Special</a>
              <a href="/Solo">Solo Travel</a>
              <a href="/Group">Group Special Travel</a>
            </div>
          )}
        </div>
        
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
        <a href="/Gallery">Gallery</a>
        <a href="/Login">Login</a>
        <a href="/Register" style={{ color: 'red', background: 'white' }}>Register</a>

      </div>
    </div>
  );
};

export default Navbar;

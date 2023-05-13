import React, { useState } from 'react';
import './navbar.css';
import julia from '../../assets/jul.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={julia} alt="Logo" />
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/prints">Prints</a>
        <a href="/contact">Contact</a>
      </div>
      <button className="navbar-menu-button" onClick={handleMenuClick}>
        Menu
      </button>
    </nav>
  );
};

export default Navbar;

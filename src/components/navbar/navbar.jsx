import React, { useState } from 'react';
import './navbar.css';
import julia from '../../assets/jul.jpeg';
import { toggleDropdownButton } from './dropdown.js'
import { FaChevronDown } from 'react-icons/fa';

 
function Navbar(props) {
  const [isDropdownOpen, setIsDropdownOpenOpen] = useState(false);

  const handleMenuLabelButtonClicked = () => {
    toggleDropdownButton();
    setIsDropdownOpenOpen(!isDropdownOpen);
  };

  const handleContactClick = () => {
    props.toggleContactOpen();
  };

  return (
    <nav className="navbar">
      <div class="navbar__dropdown-btn-div">
        <button onClick={handleMenuLabelButtonClicked} className='navbar__dropdown-btn'>
          PHOTOGRAPHY
          <FaChevronDown className={`chevron ${isDropdownOpen ? 'chevron--open' : ''}`}/>
        </button>
        <section id="main-menu" class="navbar__dropdown-menu">
          <button onClick="handleMenuLabelButtonClicked()" className='navbar__dropdown-btn'>
            ENGAGEMENTS
          </button>
          <button onClick="handleMenuLabelButtonClicked()" className='navbar__dropdown-btn'>
            GRADUATIONS
          </button>
          <button onClick="handleMenuLabelButtonClicked()" className='navbar__dropdown-btn'>
            EVENTS
          </button>
          <button onClick="handleMenuLabelButtonClicked()" className='navbar__dropdown-btn'>
            SPORTS
          </button>
        </section>
      </div>

      <div className="navbar__logo-div">
        <img src={julia} alt="Logo" className='navbar__logo-img' />
      </div>
      <div className='navbar__right'>
        <a href="https://www.pic-time.com/" target="_blank" rel="noopener noreferrer" className='navbar__clients-link'>FOR CLIENTS</a>
        <button className="navbar__contact-button" onClick={handleContactClick}>
          CONTACT
        </button>
      </div>
    </nav>
  );


  // return (
  //   <nav className="navbar">
  //     <div className='navbar__dropdown'>
  //       <a className='navbar__dropdown-btn'>Photography</a>
  //       <div class="navbar__dropdown-content">
  //         <span className='invisible'></span>
  //         <a href="#">Event</a>
  //         <a href="#">Graduation</a>
  //         <a href="#">Sports</a>
  //       </div>
  //     </div> 
  //     <div className="navbar__logo-div">
  //       <img src={julia} alt="Logo" className='navbar__logo-img'/>
  //     </div>
  //     <div className='navbar__right'>
  //       <a href="https://www.pic-time.com/" target="_blank" rel="noopener noreferrer" className='navbar__clients-link'>For Clients</a>        
  //       <button className="navbar__contact-button" onClick={handleContactClick}>
  //           Contact
  //       </button>      
  //     </div>
  //   </nav>
  // );
};

export default Navbar;

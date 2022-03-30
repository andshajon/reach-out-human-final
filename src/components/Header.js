import React from 'react'
import '../styles/Header.css';
import logo from "../assets/reach-out-human.png";
import CallToAction from './CallToAction';
function Header() {
  return (
    <div className='header'>
     <div className='header__container'>

     
     
      <img className='header__logo' src={logo} alt="reach out human"/>
     
      <div className='header__right'>
        <ul className='header__menu'>
          <li> <a src="#">Home</a></li>
          <li> <a src="#">Event</a></li>
          <li> <a src="#">About</a></li>
          <li> <a src="#">Volunteer</a></li>
          <li> <a src="#">Contact</a></li>

        </ul>

      </div>
      <CallToAction backgroundColor="#850505" color="white" text="Donate"/>
      
      </div>
    </div>
  )
}

export default Header
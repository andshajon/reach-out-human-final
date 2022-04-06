import React from 'react'
import '../styles/Header.css';
import logo from "../assets/reach-out-human.png";
import CallToAction from './CallToAction';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
     <div className='header__container'>

     
     
      <img className='header__logo' src={logo} alt="reach out human"/>
     
     
      
      <div className="header__right">
       
          <ul className='header__menu'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
          </ul>
          </div>
      <CallToAction backgroundColor="#850505" color="white" text="Donate"/>
      
      </div>
    </div>
  )
}

export default Header
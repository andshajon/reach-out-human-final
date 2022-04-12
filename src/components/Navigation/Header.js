import React from 'react'
import './Header.css';

import CallToAction from '../Button/CallToAction';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
     <div className='header__container'>

     
     
     <img src="https://lh3.googleusercontent.com/U3PDMXXKOV4UX1TjgTtF43iLVruhYt8hyyzwWqZDi_x8-rXPuXL8p7doAGvTfuTFoB54Qf3c4jYDIoEAFlBn1ekQ8yJm9zS5y7Odbj6hoSK8LVN488bUg_BfdJQyhKjlSsGN6l2p_WdEdmCrdEonEvwvUnrLlfSvutnDjR2pkfEKmaxDpdKINEqa9RiwR6TNyddvbjHOVRS4idK1EpV__CibJl8-g9Y8_yidZ081pB3ORAdSdicK2Adf36S4LoIWoNT6irGPV5GEml3JE6GnHeF8HOEcxMClt89D0r9ESlOJnPXq9pyZBBfhP4Bjc-OKmeaCs8susTAMRCA9rGiMnoVWJZS-H_BjCVxu-CsnegvTpaFaafWXwn_tpY-1vZRqUq24FV1ToevtVgJQRAFlIg7Lo0R7_WMWo-taRlzr58-BOf5v2Ctw2vuIPvq-VQe1j3IlIV4vzSVFAqONuopOULLpcFj0gWwCW2-aVOfNaldrOLh9tvPoNwWprAuHXU1bEAUNq5hHG3VwZNEsjrddLmdslCWRp8WLyAbixJ-iYgg72vju3dUAle4ejji64M-jGLbitQNgSyEt4431koG4x79IvypBeGJ3LUQhh0jzOA1JXJEiudubMjISbs3vmf_WmrRaqtVWwvx_3CkFi0rp4CosGXFRlpFIZqwSEa3P8I8Ltu-D4tRCQjNBZkAoFmSwm1viI8WKe4WJwutRqOTeKE5mi7rHtNVStelp77IxKmdjq7VEmjgr0FyuLMZC_w=s200-no?authuser=0" className='header__logo'/>
     
     
      
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
         

          <li>

          <Link to="/donate"> <CallToAction backgroundColor="#850505" color="white" text="Donate"/></Link>
          
            </li>
          </ul>
          </div>
      
      
      </div>
    </div>
  )
}

export default Header
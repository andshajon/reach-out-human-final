import React from 'react'
import '../styles/Hero.css';
import heroImage from "../assets/hero__image.png";
import CallToAction from './CallToAction';
import SupportSection from './SupportSection';

function Hero() {
    

  
  return (
    <div className='hero'>
        
        <div className='hero__container'>

         <div className='hero__left'>
          <h3 className='hero__topText'>A non-profit organisation</h3>
          <h1 className='hero__mainText'>Lend a hand for less fortunate.</h1>
          <CallToAction backgroundColor="#850505"  color="white" marginRight ="20px" text="Donate Now"/>
          <CallToAction backgroundColor="#6C63FF"  color="black"  text="What we do"/>
          

         </div>
         <img className="hero__rightWithImage" src={heroImage} alt="heroImage"/>


         


        </div>
       
        <SupportSection />
       
        
    </div>
  )
}

export default Hero
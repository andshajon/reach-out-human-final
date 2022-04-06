import React from 'react'
import './Hero.css';

import CallToAction from '../Button/CallToAction';
import SupportSection from '../SupportManyPeople/SupportSection';

function Hero() {
    

  
  return (
    <div className='hero'>
        
        <div className='hero__container'>

         <div className='hero__left'>
          <h3 className='hero__topText'>A non-profit organisation</h3>
          <h1 className='hero__mainText'>Lend a hand for less fortunate.</h1>
          <CallToAction backgroundColor="#850505"  color="white" marginRight ="20px" text="Donate Now"/>
          <CallToAction backgroundColor="transparent"  color="black"  text="What we do"/>
          

         </div>

         <div className='hero__right'>

           <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  className="hero__rightWithImage"/>
       

          </div>


         


        </div>
       
        <SupportSection />
       
        
    </div>
  )
}

export default Hero
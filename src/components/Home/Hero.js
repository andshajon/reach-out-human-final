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
          <h1 className='hero__mainText'>Lend a hand for the less fortunate.</h1>
          <CallToAction backgroundColor="#850505"  color="white" marginRight ="20px" text="Donate Now"/>
          <CallToAction backgroundColor="transparent"  color="black"  text="What we do"/>
          

         </div>

         <div className='hero__right'>

           <img src="https://media.istockphoto.com/vectors/young-muslim-man-giving-money-to-homeless-people-vector-id1305612039?k=20&m=1305612039&s=612x612&w=0&h=Vnb-VfWjLcg8dHHxJZhT_aYTzppS65TiGuEoPNeMdoQ="  className="hero__rightWithImage"/>
       

          </div>


         


        </div>
       
        <SupportSection />
       
        
    </div>
  )
}

export default Hero
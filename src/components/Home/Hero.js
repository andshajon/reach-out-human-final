import React from 'react'
import './Hero.css';

import CallToAction from '../Button/CallToAction';
import SupportSection from '../SupportManyPeople/SupportSection';
import { red } from '@mui/material/colors';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

function Hero() {

  let buttonStyle1 = {
    marginRight: 20,
    backgroundColor:"#850505" ,
    color:"white",
  }

  let buttonStyle2 = {
    
    backgroundColor: "transparent",
    color:"black"
  }
    
    

  
  return (
    <div className='hero'>
        
        <div className='hero__container'>

         <div className='hero__left'>
          <h3 className='hero__topText'>A non-profit organisation</h3>
          <h1 className='hero__mainText'>Lend a hand for the less fortunate.</h1>
          <CallToAction style = {buttonStyle1} text="Donate Now"/>
          <CallToAction  style = {buttonStyle2}   text="What we do"/>
          

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
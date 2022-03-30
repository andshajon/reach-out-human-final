import React from 'react'
import '../styles/SupportCard.css';
import YouthImage from "../assets/youth.png";



function SupportCard({image, text, subText, CallToAction}) {
  return (
    <div className='supportCard'>
       <img className="supportCard__image" src={image} />
       <div className='supportCard__textContainer'>
           <h2>{text}</h2>
           <p className='supportCard__subText'>{subText}</p>
           <div className='supportCard__callToAction'>{CallToAction}</div>

       </div>



      
    </div>
  )
}

export default SupportCard
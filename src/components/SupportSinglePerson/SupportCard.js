import React from 'react'
import './SupportCard.css';




function SupportCard({ image ,text, subText, CallToAction}) {
  return (
    <div className='supportCard'>
       <img src={image} className="supportCard__image"  />
       <div className='supportCard__textContainer'>
           <h2>{text}</h2>
           <p className='supportCard__subText'>{subText}</p>
           <div className='supportCard__callToAction'>{CallToAction}</div>

       </div>



      
    </div>
  )
}

export default SupportCard
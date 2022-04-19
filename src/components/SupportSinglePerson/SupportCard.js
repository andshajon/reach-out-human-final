import React from 'react'
import './SupportCard.css';




function SupportCard({ image , title , text , CallToAction}) {
  return (
    <div className='supportCard'>
       <img src={image} alt={title} className="supportCard__image"  />
       <div className='supportCard__textContainer'>
           <h2>{text}</h2>
          
           <div className='supportCard__callToAction'>{CallToAction}</div>

       </div>



      
    </div>
  )
}

export default SupportCard
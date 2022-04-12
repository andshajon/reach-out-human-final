import React from 'react'
import './WhatPersonSay.css';
function WhatPersonSay({
  image ,maintext, subText,
}) {
  return (
    
    <div className='whatPersonSay'>
       <img src={image} className="whatPersonSay__image"  />
       <div className='whatPersonSay__textContainer'>
           <h2 className='whatPersonSay__mainText' >{maintext}</h2>
           <p className='whatPersonSay__subText'>{subText}</p>
           

       </div>



      
    </div>
  )
}

export default WhatPersonSay
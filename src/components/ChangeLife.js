import React from 'react'
import '../styles/ChangeLife.css';

function changeLife( { image, mainText, paraText, width , }) {

  

  return (
    <div style={{width:width, }} className='changeLife'>


        

          <img src={image}/>
         <div className='changeLife__textContainer'>
            <h3 className='changeLife__mainText'>{mainText}</h3>
            <p className='changeLife__subText'>{paraText}</p>


         </div>


   

    </div>
  )
}

export default changeLife
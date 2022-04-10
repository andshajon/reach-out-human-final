import React from 'react'
import './TopPageModify.css';



function TopPageModify({mainText , subText , image} ) {
  return (
    <div className='topPageModify'>

      <div className='topPageModify__container'>

        <div className='topPageModify__left'>

          <h2 className='topPageModify__maintext'>{mainText}</h2>
          <p>{subText}</p>



        </div>
        <div className='topPageModify__right'>

           <img src={image} />



        </div>

          



      </div>


    </div>
  )
}

export default TopPageModify
import React from 'react'
import './TopPageModify.css';



function TopPageModify({mainText , subText , } ) {
  return (
    <div className='topPageModify'>

      <div className='topPageModify__container'>

       

          <div className='topPageModify__containerLeft'>

                <h2 className='topPageModify__maintext'>{mainText}</h2>
                <p  className='topPageModify__subtext'>{subText}</p>
                  
                  
            
            </div>

            <div className='topPageModify__containerRight'>



            </div>



       
        

          



      </div>


    </div>
  )
}

export default TopPageModify
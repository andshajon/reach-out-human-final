import React from 'react'
import './ChangeLife.css';
import  { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

function ChangeLife( { image, mainText, paraText, width , like , dislike}){

  const [addLike, setAddLike] = useState(0);
  const [addDislike, setAddDislike] = useState(0);

  function onClickLike(){
    setAddLike( addLike + 1);
  }

  function onClickDislike(){
    setAddDislike( addDislike + 1);
  }







 

    



  

  return (
    <div style={{width:width, }} className='changeLife'>


        

          <img src={image}/>
         <div className='changeLife__textContainer'>
            <h3 className='changeLife__mainText'>{mainText}</h3>
            <p className='changeLife__subText'>{paraText}</p>
            <div className='changeLife__likeDislike'>
              
              <div className='changeLife__divLike'>


               <span onClick={onClickLike}><FavoriteBorderIcon className='love'  /></span>
              <span className='changeLife__like' onClick={onClickLike}>{like } </span> 

                 
                 <span className='changeLife__addLike'>{addLike}</span>

              </div>

              <div className='changeLife__divDislike'>



               
               <span onClick={onClickDislike}><ThumbDownOffAltIcon className='hate' /></span>
              
              
               <span className='changeLife__dislike' onClick={onClickDislike}>{dislike}  </span> 
               <span className='changeLife__addLike'>{addDislike}</span>

               </div>

            </div>


         </div>


   

    </div>
  )
}

export default ChangeLife
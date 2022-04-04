import React from 'react'
import '../styles/ChangesLives.css';
import ChangeLife from './ChangeLife';

function ChangesLives() {
  return (
    <div className='changesLives'>
        <h2 className="changesLives__headLine">  Discover how you are changing someone's life </h2>


      <div className='changesLives__container'>

      <ChangeLife  width="500px" image={'https://cdn.pixabay.com/photo/2020/05/25/04/22/man-5216903__340.jpg'}  paraText="You helped salma to successed" mainText="Salma is now independend"/>
      <ChangeLife  width="500px" image={'https://cdn.pixabay.com/photo/2012/10/10/17/52/children-60743__340.jpg'}  paraText="You helped salma to successed" mainText="Salma is now independend"/>
      <ChangeLife  width="500px" image={'https://cdn.pixabay.com/photo/2019/04/17/08/50/poor-boy-4133640__340.jpg'}  paraText="You helped salma to successed" mainText="Salma is now independend"/>
      <ChangeLife  width="500px" image={'https://cdn.pixabay.com/photo/2017/11/25/19/21/old-lady-on-the-jamun-coast-2977477__340.jpg'}  paraText="You helped salma to successed" mainText="Salma is now independend"/>
    
       
       
       
        





      </div>
    </div>
  )
}

export default ChangesLives
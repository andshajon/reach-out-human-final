import React from 'react'
import './TopPageNeed.css';
import TopPageModify from '../TopSectionModify/TopPageModify';
function TopPageNeed() {

  let mainText = "We're privileged to make some diffrence together with you. \n Thank you so much for being with us.";
  let newMainText = mainText.split('\n').map(i => {
    return <h2>{i}</h2>
});
let subText = " You motivate us to run extra 10 miles to find a deparate  needy without any hesitaion. We're so proud of it. ";
let newSubText = subText.split('\n').map(i => {
  return <p>{i}</p>
});

  


  return (
    <div className='topPageNeed'>

        <TopPageModify mainText ={newMainText} subText={newSubText} />






    </div>
  )
}

export default TopPageNeed
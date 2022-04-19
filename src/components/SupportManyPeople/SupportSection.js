import React from 'react'
import './SupportSection.css';
import SupportCard from '../SupportSinglePerson/SupportCard';

import CallToAction from '../Button/CallToAction';


function SupportSection() {
  return (
    <div className='support__section'>
        <div className='support__sectionContainer'>
          <SupportCard image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZmG5Ak8uDzvaPTzc7b4DdOf7UxAGWv66Cw&usqp=CAU" title = "image one"  text="Let's help children out for brighter future" CallToAction={<CallToAction backgroundColor="transparent"  color="black"  text="Donate"/>}/>
          <SupportCard image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rhogc4toB6W_ZLn1POTlQImStVbTr-Zm7w&usqp=CAU"  title = "image two" text="We could bring back a hope for elderly" CallToAction={<CallToAction backgroundColor="transparent" color="Black" text="Donate"/>}/>
        

        </div>
        
        

        

       

    </div>
  )
}

export default SupportSection
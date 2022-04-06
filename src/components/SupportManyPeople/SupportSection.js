import React from 'react'
import './SupportSection.css';
import SupportCard from '../SupportSinglePerson/SupportCard';

import CallToAction from '../Button/CallToAction';


function SupportSection() {
  return (
    <div className='support__section'>
        <div className='support__sectionContainer'>
          <SupportCard image = "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" text="Education for youth" subText="Lorem ipsum dolor site" CallToAction={<CallToAction backgroundColor="transparent"  color="black"  text="Donate"/>}/>
          <SupportCard image = "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  text="Financial support for needy" subText="Diffrent Lorem ipsum dolor sit " CallToAction={<CallToAction backgroundColor="transparent" color="Black" text="Donate"/>}/>
        

        </div>
        
        

        

       

    </div>
  )
}

export default SupportSection
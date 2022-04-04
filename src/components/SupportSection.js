import React from 'react'
import '../styles/SupportSection.css';
import SupportCard from './SupportCard';
import YouthImage from "../assets/youth.png";
import OldImage from "../assets/old__people.png"
import CallToAction from './CallToAction';


function SupportSection() {
  return (
    <div className='support__section'>
        <div className='support__sectionContainer'>
          <SupportCard image={YouthImage} text="Education for youth" subText="Lorem ipsum dolor site" CallToAction={<CallToAction backgroundColor="transparent"  color="black"  text="Donate"/>}/>
          <SupportCard  image={OldImage} text="Financial support for needy" subText="Diffrent Lorem ipsum dolor sit " CallToAction={<CallToAction backgroundColor="transparent" color="Black" text="Donate"/>}/>
        

        </div>
        
        

        

       

    </div>
  )
}

export default SupportSection
import React from 'react'
import './SupportSection.css';
import SupportCard from '../SupportSinglePerson/SupportCard';

import CallToAction from '../Button/CallToAction';


function SupportSection() {






  
  let text1 = "Let's help \n unprivileged children";
  let newText1 = text1.split('\n').map(i => {
    return <h2>{i}</h2>
});

let text2 = "Bring back a \n hope for venerable";
  let newText2 = text2.split('\n').map(i => {
    return <h2>{i}</h2>
});




let buttonStyle2 = {
    
  backgroundColor: "transparent",
  color: "black",
}
  





 





 

  return (
    <div className='support__section'>
        <div className='support__sectionContainer'>
          <SupportCard image = "https://png.pngtree.com/png-clipart/20210823/ourmid/pngtree-illustration-of-muslim-children-going-back-to-school-png-image_3812391.jpg" title = "image one"  text= {newText1} CallToAction={<CallToAction style={buttonStyle2} text="Donate"/>}/>
          <SupportCard image = "https://png.pngtree.com/png-clipart/20210402/ourlarge/pngtree-ramadan-background-muslim-man-give-iftar-donation-to-poor-old-png-image_3193368.jpg"  title = "image two" text={newText2} CallToAction={<CallToAction style={buttonStyle2} text="Donate"/>}/>
        

        </div>
        
        

        

       

    </div>
  )
}

export default SupportSection
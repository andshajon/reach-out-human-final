import React from 'react'
import './QuestionsAboutUs.css';
import CallToAction from '../Button/CallToAction';


function QuestionsAboutUs() {

  let buttonStyle1 = {
    marginRight: 20,
    backgroundColor:"#850505" ,
    color:"white",
  }

  let buttonStyle2 = {
    
    backgroundColor: "transparent",
    color: "black"
  }







  return (
    <div className='questionsAboutUs'>

        <div className='questionsAboutUs__container'>


            <div>

                <h3>Question about <br/> our work</h3>
                <CallToAction style={buttonStyle1} text="Contact Us"/>
                <CallToAction style={buttonStyle2} text="Read More"/>
            


            </div>
           
            


           
          
            

        </div>




    </div>
  )
}

export default QuestionsAboutUs
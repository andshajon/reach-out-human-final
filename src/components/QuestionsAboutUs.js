import React from 'react'
import '../styles/QuestionsAboutUs.css';
import CallToAction from './CallToAction';

function QuestionsAboutUs() {
  return (
    <div className='questionsAboutUs'>

        <div className='questionsAboutUs__container'>


            <div>

                <h3>Question about <br/> our work</h3>
                <CallToAction backgroundColor="#850505"  color="white" marginRight ="20px" text="Contact Us"/>
                <CallToAction backgroundColor="transparent"  color="black"  text="Read More"/>
            


            </div>
           
            


           
          
            

        </div>




    </div>
  )
}

export default QuestionsAboutUs
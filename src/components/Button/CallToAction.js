import React from 'react'
import './CallToAction.css';
function CallToAction({text, style}) {
  return <a style = {style}
  className ="callToAction" src="#">{text}</a>
    
  
}

export default CallToAction
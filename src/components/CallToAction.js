import React from 'react'
import '../styles/CallToAction.css';
function CallToAction({backgroundColor ,color , marginRight, text}) {
  return <a style={{backgroundColor: backgroundColor , color: color, marginRight:marginRight }}
  className ="callToAction" src="#">{text}</a>
    
  
}

export default CallToAction
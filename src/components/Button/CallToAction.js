import React from 'react'
import './CallToAction.css';
function CallToAction({backgroundColor ,color , marginRight, marginTop,text}) {
  return <a style={{backgroundColor: backgroundColor , color: color, marginRight:marginRight, marginTop:marginTop }}
  className ="callToAction" src="#">{text}</a>
    
  
}

export default CallToAction
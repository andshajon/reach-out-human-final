import React from 'react'
import './WhatPeopleSay.css';
import WhatPersonSay from '../WhatPersonSay.js/WhatPersonSay';

function WhatPeopleSay() {
  return (
    <div className='whatPeopleSay'>

       <h2 className="whatPeopleSay__headLine">  What people say about our work   </h2>   
        <div className='whatPeopleSay__sectionContainer'>
          <WhatPersonSay  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JZ3YnIJWlWy-13bQ9Tj49ILjVAv2iyU3JQ&usqp=CAU" maintext="Education for youth" subText="Lorem ipsum dolor site" />
          <WhatPersonSay  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8QfDCNPqKfOj4SiERPIdU2g_E4KYcPL4Wg&usqp=CAU"  maintext="Financial support for needy" subText="Diffrent Lorem ipsum dolor sit " />
          <WhatPersonSay  image = "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  maintext="Financial support for needy" subText="Diffrent Lorem ipsum dolor sit " />
        

        </div>
        
        

        

       

    </div>
  )
}

export default WhatPeopleSay
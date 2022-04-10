import React from 'react'
import './Footer.css';



function Footer() {
  return (



  

<footer className="footer">

    <div className='footer__container'>
    <div className="footer__left">
    <img className="footer__logo"/>
        
 
    
 
  </div>
  
  <ul className="footer__navBarRight">
    <li className="footer__item">
      <h2 className="footer__title">Useful Menus</h2>

      <ul className="footer__ul">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>
            
        <li>
          <a href="#">Donation</a>
        </li>
      </ul>

     
    </li>

    <li className="footer__item">
      <h2 className="footer__title">Terms & Conditions</h2>

      <ul className="footer__ul">
        <li>
          <a href="#">Privacy</a>
        </li>

        <li>
          <a href="#">Policy</a>
        </li>
            
        <li>
          <a href="#">Usage</a>
        </li>
      </ul>

     
    </li>
    
    <li className="footer__item">
      <h2 className="footer__title">Social Media</h2>

      <ul className="footer__ul">
        <li>
          <a href="#">Facebook</a>
        </li>

        <li>
          <a href="#">Instagram</a>
        </li>
            
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>

     
    </li>
    
    
    
  </ul>
  
 

  </div>

  <div className="legal footerBottom__container">
    <p>&copy; 2019 Reach Out Human. All rights reserved.</p>
    
  
  
  </div>
</footer>

    
    
  )
}

export default Footer
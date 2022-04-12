import React from 'react'
import './Footer.css';
import CallToAction from '../Button/CallToAction';


function Footer() {
  return (



  

<footer className="footer">

    <div className='footer__container'>
    <div className="footer__left">
    <img src="https://lh3.googleusercontent.com/U3PDMXXKOV4UX1TjgTtF43iLVruhYt8hyyzwWqZDi_x8-rXPuXL8p7doAGvTfuTFoB54Qf3c4jYDIoEAFlBn1ekQ8yJm9zS5y7Odbj6hoSK8LVN488bUg_BfdJQyhKjlSsGN6l2p_WdEdmCrdEonEvwvUnrLlfSvutnDjR2pkfEKmaxDpdKINEqa9RiwR6TNyddvbjHOVRS4idK1EpV__CibJl8-g9Y8_yidZ081pB3ORAdSdicK2Adf36S4LoIWoNT6irGPV5GEml3JE6GnHeF8HOEcxMClt89D0r9ESlOJnPXq9pyZBBfhP4Bjc-OKmeaCs8susTAMRCA9rGiMnoVWJZS-H_BjCVxu-CsnegvTpaFaafWXwn_tpY-1vZRqUq24FV1ToevtVgJQRAFlIg7Lo0R7_WMWo-taRlzr58-BOf5v2Ctw2vuIPvq-VQe1j3IlIV4vzSVFAqONuopOULLpcFj0gWwCW2-aVOfNaldrOLh9tvPoNwWprAuHXU1bEAUNq5hHG3VwZNEsjrddLmdslCWRp8WLyAbixJ-iYgg72vju3dUAle4ejji64M-jGLbitQNgSyEt4431koG4x79IvypBeGJ3LUQhh0jzOA1JXJEiudubMjISbs3vmf_WmrRaqtVWwvx_3CkFi0rp4CosGXFRlpFIZqwSEa3P8I8Ltu-D4tRCQjNBZkAoFmSwm1viI8WKe4WJwutRqOTeKE5mi7rHtNVStelp77IxKmdjq7VEmjgr0FyuLMZC_w=s200-no?authuser=0" className="footer__logo"/>
    <CallToAction backgroundColor="transparent"  color="#DFC0CB"  text="Donate Here"/>
        
 
    
 
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
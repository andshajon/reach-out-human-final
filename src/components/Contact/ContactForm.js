import React from 'react'
import './ContactForm.css';


function ContactForm() {
  return (
    <div className='contact'>

        <div className='contact__container '>

        <div className="card">
  <h2>Contact Us</h2>
  <div className="row">
    <div className="col">
      <div className="form-group">
        <label>First Name</label>
        <input type="text"  placeholder=' Write First Name Here'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder=' Write Last Name Here'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Email</label>
        <input type="text" placeholder=' Write Email Address Here'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Phone</label>
        <input type="text" placeholder=' Write Phone Number Here'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder='Write  Your Message Here '></textarea>
      </div>
    </div>

    <div className="col">
      <input type="submit" value="Submit"/>
    </div>
  </div>
</div>


















        </div>






    </div>
  )
}

export default ContactForm
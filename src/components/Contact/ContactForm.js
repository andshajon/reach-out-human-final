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
        <input type="text"  placeholder='First Name'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder='Last Name'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Email</label>
        <input type="text" placeholder='Email'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Phone</label>
        <input type="text" placeholder='Phone'/>
      </div>
    </div>

    <div className="col">
      <div className="form-group">
        <label>Message</label>
        <textarea placeholder='Write Here '></textarea>
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
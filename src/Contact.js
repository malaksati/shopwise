import React, { Fragment } from 'react'

function Contact() {
  return (
    <Fragment>
      <div className='contact-page'>
        <div className='container'>
          <div className='contact-cards'>
            <div className='contact-box'>
              <div className='con-icon'>
              <i class="fa fa-2x fas fa-map-location-dot"></i>
              </div>
              <h2>Address</h2>
              <p>123 Street, Old Trafford, London, UK</p>
            </div>
            <div className='contact-box'>
              <div className='con-icon'>
              <i class="fa fa-2x fas fa-envelope"></i>
              </div>
              <h2>Email Address</h2>
              <p>info@yourmail.com</p>
            </div>
            <div className='contact-box'>
              <div className='con-icon'>
              <i class="fa fa-2x fas fa-phone"></i>
              </div>
              <h2>Phone</h2>
              <p>+ 457 789 789 65</p>
            </div>
          </div>
          <div className='form-contact'>
            <div className='form-text'>
              <h2>Get In Touch</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
            </div>
            <form action=''>
              <input type='text' placeholder='Enter Name *' className='first-name' />
              <input type='email' placeholder='Enter Email *' className='email' />
              <input type='tel' placeholder='Enter Phone No. *' className='phone' />
              <input type='text' placeholder='Enter Sub' className='subject' />
              <textarea className='message' placeholder='Message *' ></textarea>
              <button className='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
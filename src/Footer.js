import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Fragment>
        <footer>
          <div className='container'>
            <div className='contact'>
              <h3>Contact Info</h3>
              <p>123 Street, Old Trafford, NewYork</p>
              <p>info@sitename.com</p>
              <p>+457 789 756 21</p>
              <div className='social-icons'>
                <Link><i className="fab fa-facebook-f"></i></Link>
                <Link><i className="fab fa-twitter"></i></Link>
                <Link><i className="fab fa-youtube"></i></Link>
              </div>
            </div>
            <div className='links'>
              <h3>Usefull Links</h3>
              <Link to='/about'>About Us</Link>
              <Link>FAQ</Link>
              <Link>Location</Link>
              <Link>Affiliates</Link>
              <Link to='/contact'>Contact Us</Link>
            </div>
            <div className='account'>
              <h3>My Account</h3>
              <Link>My Account</Link>
              <Link>Discount</Link>
              <Link>Returns</Link>
              <Link>Orders History</Link>
              <Link>Order Tracking</Link>
            </div>
            <div className='sub'>
              <h3>Subscribe Our Newsletter</h3>
              <p>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
              <div className='input-btn'>
                <form action=''>
                <input type='email' placeholder='Enter Email Address'/>
                <button><i className="fa fas fa-envelope"></i></button>
                </form>
              </div> 
            </div>
          </div>
          <div className='hr-c'></div>
          <div className='end container'>
            <p>&copy; 2023 All Rights Reserved By Malak Al-Sati</p>
          </div>
        </footer>
    </Fragment>
  )
}

export default Footer
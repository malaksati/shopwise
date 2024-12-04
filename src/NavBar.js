import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'
function NavBar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='image'>
          <NavLink to='/'><img src={logo} alt='logo'></img></NavLink>
        </div>
        <div className='btns'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/product'>Product</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
        </div>
        <div className='log-cart'>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/cart'><i className='fa fa-light fa-cart-shopping'></i></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
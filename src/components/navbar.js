import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import * as navbarStyles from './navbar.module.scss'

import logo from '../assets/logo2-02.png'

function NavBar() {
  return (
    <nav>
      <div className='logo-text'>
        <Link to="/">
          <img src={logo} alt='Logo is a dog paw icon' style={{ width: '75px' }} />
          {/* <h2>Mountain River Silver Labs</h2> */}
        </Link>
      </div>
      <div className='nav-right'>
        <NavLink exact to='/' className='nav-link' activeClassName='nav-link-active'>
          Home
        </NavLink>
        <NavLink exact to='/about-us' className='nav-link' activeClassName='nav-link-active'>
          About us
        </NavLink>
        <NavLink to='/litters' className='nav-link' activeClassName='nav-link-active'>
          Litters
        </NavLink>
        <NavLink to='/blog' className='nav-link' activeClassName='nav-link-active'>
          Blog
        </NavLink>
        <NavLink exact to='/contact-us' className='nav-link' activeClassName='nav-link-active'>
          Contact Us
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
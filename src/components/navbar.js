import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to='/' className='nav-link' style={{ margin: '15px' }}>
          Home
        </Link>
        <Link to='/about-us' className='nav-link' style={{ margin: '15px' }}>
          About us
        </Link>
        <Link to='/litters' className='nav-link' style={{ margin: '15px' }}>
          Litters
        </Link>
        <Link to='/blog' className='nav-link' style={{ margin: '15px' }}>
          Blog
        </Link>
        <Link to='/contact-us' className='nav-link' style={{ margin: '15px' }}>
          Contact Us
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
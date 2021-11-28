import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h2>Mountain River Silver Labs</h2>
      </Link>
      <div className='nav-right'>
        <Link to='/' className='nav-link' style={{ margin: '15px' }}>
          Home
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
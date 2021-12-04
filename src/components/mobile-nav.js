import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo2-02.png'
import hamburger from '../assets/menu.png' // Provided by https://www.flaticon.com/authors/Icontive

const MobileNav = () => {
  const [menu, setMenu] = useState(false)

  function showMenu() {
    setMenu(!menu)
  }

  return (
    <div className='mobile-navbar'>
      <div className='images-mobile'>
        <Link to='/'><img src={logo} alt='dog logo' style={{ width: '75px' }} /></Link>
        <div onTouchEnd={showMenu}><img className='hamburger' src={hamburger} alt='hamburger menu' /></div>
      </div>
      {menu ? (
        <div>
          <Link 
            to='/' 
            className='mobile-link' 
            onClick={showMenu}
          >
            Home
          </Link>
          <Link 
            to='/litters' 
            className='mobile-link' 
            onClick={showMenu}
          >
            Litters
          </Link>
          <Link 
            to='/gallery' 
            className='mobile-link' 
            onClick={showMenu}
          >
            Gallery
          </Link>
          <Link 
            to='/blog' 
            className='mobile-link' 
            onClick={showMenu}
          >
            Blog
          </Link>
          <Link 
            to='/contact-us' 
            className='mobile-link' 
            onClick={showMenu}
          >
            Contact Us
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default MobileNav

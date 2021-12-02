import React from 'react'

import greenMountains from '../assets/022_15-2.jpg'

const Contact = () => {
  return (
    <div className='contact-page'>
      <img src={greenMountains} alt='beautiful green tree covered mountains' className='contact-img' />
      <div className='contact-info'>
        <h2>Contact Us</h2>
        <p>
          Email: mtn.river.silvers@gmail.com<br />
          Phone: 208-xxx-xxxx
        </p>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'

import greenMountains from '../assets/022_15-2.jpg'

const Contact = () => {
  return (
    <div className='contact-page'>
      <img src={greenMountains} alt='beautiful green tree covered mountains' className='contact-img' />
      <div className='contact-info'>
        <h2>Contact Us</h2>
        <p>
          <strong>Email :</strong> mtn.river.silvers@gmail.com<br />
        </p>
        <a 
          className='email-link' 
          href='mailto:mtn.river.silvers@gmail.com?Subject=Puppy Inquiry&body=I would love to adopt one of your puppies! Which are atill available?' 
        >
          Send us an Email
        </a>
      </div>
    </div>
  )
}

export default Contact

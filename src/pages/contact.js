import React, { useState, useEffect } from 'react'

import greenMountains from '../assets/022_15-2.jpg'
import mobileMountains from '../assets/mobileMountains.png'

const Contact = () => {
  const [windowDimension, setWindowDimension] = useState(null)

  useEffect(() => {
    setWindowDimension(window.innerWidth)
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowDimension <= 640

  return (
    <div className='contact-page'>
      {isMobile ? (
        <img src={mobileMountains} alt='beautiful green tree covered mountains' className='contact-img' />
      ) : (
        <img src={greenMountains} alt='beautiful green tree covered mountains' className='contact-img' />
      )}
      <div className='contact-info'>
        <h2>Contact Us</h2>
        <h4>We are located in the Idaho Falls area.</h4>
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

import React from 'react'

import PuppiesImg from '../assets/4pups.jpg'

const Home = () => {
  return (
    <>
      <div className='container'>
        <img src={PuppiesImg} alt='4 puppies of varying colors' className='home-banner' />
        <div class='home-centered'><strong>Mountain River Silver Labs</strong></div>
      </div>
    </>
  )
}

export default Home

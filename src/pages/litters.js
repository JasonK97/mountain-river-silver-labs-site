import React from 'react'

import grizz1 from '../assets/Grizz-1.jpg'
import grizz2 from '../assets/Grizz-2.jpg'
import grizz3 from '../assets/Grizz-3.jpg'
import hank1 from '../assets/Hank-1.jpg'
import hank2 from '../assets/Hank-2.jpg'
import hank3 from '../assets/Hank-3.jpg'
import rey1 from '../assets/Rey-1.jpg'
import rey2 from '../assets/Rey-2.jpg'
import rey3 from '../assets/Rey-3.jpg'
import nova1 from '../assets/Nova-1.jpg'
import nova2 from '../assets/Nova-2.jpg'
import nova3 from '../assets/Nova-4.jpg'

const Litters = () => {
  return (
    <div className='litters-page'>
      <h2>Where are they now?</h2>
      <div className='litter-2020'>
        <h3>Spring Litter 2020</h3>
        <div className="puppy-card">
          <h4>Grizz</h4>
          <p>
            This is Grizz, a Chocolate Male. He went to an young adventuring couple in Utah.
          </p>
          <div className='gallery'>
            <img src={grizz1} alt='Silver lab Rey looking at an ice cube' className='litter-image' />
            <img src={grizz2} alt='Rey the silver lab looking photogenic' className='litter-image' />
            <img src={grizz3} alt='one last one of Rey' className='litter-image' />
          </div>
        </div>
      </div>
      <div className='litter-2019'>
        <h3>Spring Litter 2019</h3>
        <div className="puppy-card">
          <h4>Rey</h4>
          <p>
            This is Rey, a Silver Female. She was a gift from a dad to his loving daughter in Salt Lake City.
          </p>
          <div className='gallery'>
            <img src={rey1} alt='Silver lab Rey looking at an ice cube' className='litter-image' />
            <img src={rey2} alt='Rey the silver lab looking photogenic' className='litter-image' />
            <img src={rey3} alt='one last one of Rey' className='litter-image' />
          </div>
        </div>
        <div className="puppy-card">
          <h4>Hank</h4>
          <p>
            This is Hank, a Charcoal Male. He went to a loving home with a girl in Eastern Idaho.
          </p>
          <div className='gallery'>
            <img src={hank1} alt='charcoal puppy named hank' className='litter-image' />
            <img src={hank2} alt='hank, the charcoal puppy again' className='litter-image' />
            <img src={hank3} alt='one last one of hank' className='litter-image' />
          </div>
        </div>
        <div className="puppy-card">
          <h4>Nova</h4>
          <p>
            This is Nova, a Chocolate Female. She went to an Astrophotographer in Eastern Idaho.
          </p>
          <div className='gallery'>
            <img src={nova1} alt='charcoal puppy named hank' className='litter-image' />
            <img src={nova2} alt='hank, the charcoal puppy again' className='litter-image' />
            <img src={nova3} alt='one last one of hank' className='litter-image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Litters

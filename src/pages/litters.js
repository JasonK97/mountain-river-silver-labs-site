import React from 'react'
import { Link } from 'react-router-dom'

import grizz1 from '../assets/Grizz-1.jpg'
import grizz2 from '../assets/Grizz-2.jpg'
import grizz3 from '../assets/Grizz-3.jpg'
import hank1 from '../assets/Hank-1.jpg'
import hank2 from '../assets/Hank-2.jpg'
import hank3 from '../assets/Hank-3.jpg'
import murray1 from '../assets/murray-1.jpg'
import murray2 from '../assets/murray-2.jpg'
import murray3 from '../assets/murray-3.jpg'
import nova1 from '../assets/Nova-1.jpg'
import nova2 from '../assets/Nova-2.jpg'
import nova3 from '../assets/Nova-4.jpg'
import rey1 from '../assets/Rey-1.jpg'
import rey2 from '../assets/Rey-2.jpg'
import rey3 from '../assets/Rey-3.jpg'
import rip1 from '../assets/rip-1.jpg'
import rip2 from '../assets/rip-2.jpg'
import rip3 from '../assets/rip-3.jpg'


const Litters = () => {
  return (
    <div className='litters-page'>
      <div className='litter-nav'>
        <Link to='/litters/where-are-they-now'>Where are they now?</Link>
        <Link to='/litters/gallery'>Image Gallery</Link>
      </div>
      <h2 style={{ textAlign: 'center' }}>Where are they now?</h2>
      <div className='litter-2020'>
        <h2>Spring Litter 2020</h2>
        <div className="puppy-card">
          <h3>Grizz</h3>
          <p>
            This is Grizz, a Chocolate Male. He went to an young adventuring couple in Utah.
          </p>
          <div className='gallery'>
            <img src={grizz1} alt='chocolate lab in the bushes' className='litter-image' />
            <img src={grizz2} alt='spikey hair on a wet grizz' className='litter-image' />
            <img src={grizz3} alt='grizz laying down on a poarch' className='litter-image' />
          </div>
        </div>
        <div className="puppy-card">
          <h3>Murray</h3>
          <p>
            This is Murray, a Black Male. He lives with an amzingly loving young couple in Rexburg.
          </p>
          <div className='gallery'>
            <img src={murray1} alt='black lab sitting politely' className='litter-image' />
            <img src={murray2} alt='murray laying in the grass' className='litter-image' />
            <img src={murray3} alt='murray the black lab in the leaves' className='litter-image' />
          </div>
        </div>
        <div className="puppy-card">
          <h3>Rip</h3>
          <p>
            This is Rip, a Charcoal Male. He went to an extremely animal loving family with 2 daughters in Rigby.
          </p>
          <div className='gallery'>
            <img src={rip1} alt='Charcoal lab Rip looking at his owners' className='litter-image' />
            <img src={rip2} alt='Rip laying on the ground' className='litter-image' />
            <img src={rip3} alt='one last one of Rip' className='litter-image' />
          </div>
        </div>
      </div>
      <div className='litter-2019'>
        <h2>Spring Litter 2019</h2>
        <div className="puppy-card">
          <h3>Rey</h3>
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
          <h3>Hank</h3>
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
          <h3>Nova</h3>
          <p>
            This is Nova, a Chocolate Female. She went to an Astrophotographer in Eastern Idaho.
          </p>
          <div className='gallery'>
            <img src={nova1} alt='chocolate lab nova, on a driveway' className='litter-image' />
            <img src={nova2} alt='nova looking at someone in a kitchen in front of her kennel' className='litter-image' />
            <img src={nova3} alt='nova trotting up to the photographer on a driveway' className='litter-image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Litters

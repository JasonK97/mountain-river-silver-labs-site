import React from 'react'

import litter101 from '../assets/puppiesfrom2019litter/IMG-4107.JPG'
import litter102 from '../assets/puppiesfrom2019litter/IMG-4108.JPG'
import litter103 from '../assets/puppiesfrom2019litter/IMG-4109.JPG'
import litter104 from '../assets/puppiesfrom2019litter/IMG-4111.JPG'
import litter105 from '../assets/puppiesfrom2019litter/IMG-4112.JPG'
import litter106 from '../assets/puppiesfrom2019litter/IMG-4115.JPG'
import litter107 from '../assets/puppiesfrom2019litter/IMG-4119.JPG'
import litter108 from '../assets/puppiesfrom2019litter/IMG-4341.JPG'
import litter109 from '../assets/puppiesfrom2019litter/IMG-4343.JPG'
import litter110 from '../assets/puppiesfrom2019litter/IMG-4344.JPG'
import litter111 from '../assets/puppiesfrom2019litter/IMG-4345.JPG'
import litter112 from '../assets/puppiesfrom2019litter/IMG-4346.jpg'

import litter201 from '../assets/2020litter/IMG_5275.JPG'
import litter202 from '../assets/2020litter/IMG_5287.JPG'
import litter203 from '../assets/2020litter/IMG_5297.JPG'
import litter204 from '../assets/2020litter/IMG_5318.JPG'
import litter205 from '../assets/2020litter/IMG_5346.JPG'
import litter206 from '../assets/2020litter/IMG_5377.JPG'
import litter207 from '../assets/2020litter/IMG_5431.JPG'
import litter208 from '../assets/2020litter/IMG_5450.JPG'
import litter209 from '../assets/2020litter/IMG_5457.JPG'
import litter210 from '../assets/2020litter/IMG_6718.JPG'
import litter211 from '../assets/2020litter/IMG_6810.JPG'
import litter212 from '../assets/2020litter/IMG_6841.JPG'


const Litters = () => {
  return (
    <div className='litters-page'>
      <div className='litter-2020'>
          <h2>Spring Litter 2020</h2>
          <div className="gallery">
            <img src={litter201} alt='charcoal puppy' className='litter-image' />
            <img src={litter202} alt='second charcoal puppy' className='litter-image' />
            <img src={litter203} alt='silver and charcoal puppies' className='litter-image' />
            <img src={litter204} alt='two black puppies' className='litter-image' />
            <img src={litter205} alt='three charcoal puppies' className='litter-image' />
            <img src={litter206} alt='four chocolate puppies' className='litter-image' />
            <img src={litter207} alt='silver puppt' className='litter-image' />
            <img src={litter208} alt='charcoal puppy on brown fur' className='litter-image' />
            <img src={litter209} alt='black puppy on brown fur' className='litter-image' />
            <img src={litter210} alt='chocolate puppy on the lawn' className='litter-image' />
            <img src={litter211} alt='another chocolate puppy on the lawn' className='litter-image' />
            <img src={litter212} alt='charcoal puppy on the lawn' className='litter-image' />
          </div>
        </div>
      <div className='litter-2019'>
        <h2>Spring Litter 2019</h2>
        <div className="gallery">
          <img src={litter101} alt='charcoal puppy on white fur' className='litter-image' />
          <img src={litter102} alt='two chocolate puppies' className='litter-image' />
          <img src={litter103} alt='four charcoal puppies' className='litter-image' />
          <img src={litter104} alt='one puppy of each color, black, charcoal, chocolate, and silver' className='litter-image' />
          <img src={litter105} alt='charcoal puppy and silver puppy' className='litter-image' />
          <img src={litter106} alt='group of puppies' className='litter-image' />
          <img src={litter107} alt='two charcoal puppies' className='litter-image' />
          <img src={litter108} alt='charcoal puppy with a red bow' className='litter-image' />
          <img src={litter109} alt='silver puppy with yellow bow' className='litter-image' />
          <img src={litter110} alt='silver puppy with yellow bow being held' className='litter-image' />
          <img src={litter111} alt='silver puppy with the yellow bow again' className='litter-image' />
          <img src={litter112} alt='cute pile of puppies on the lawn' className='litter-image' />
        </div>
      </div>
    </div>
  )
}

export default Litters

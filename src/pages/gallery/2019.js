import React from 'react'

import litter101 from '../../assets/puppiesfrom2019litter/IMG-4107.JPG'
import litter102 from '../../assets/puppiesfrom2019litter/IMG-4108.JPG'
import litter103 from '../../assets/puppiesfrom2019litter/IMG-4109.JPG'
import litter104 from '../../assets/puppiesfrom2019litter/IMG-4111.JPG'
import litter105 from '../../assets/puppiesfrom2019litter/IMG-4112.JPG'
import litter106 from '../../assets/puppiesfrom2019litter/IMG-4115.JPG'
import litter107 from '../../assets/puppiesfrom2019litter/IMG-4119.JPG'
import litter108 from '../../assets/puppiesfrom2019litter/IMG-4341.JPG'
import litter109 from '../../assets/puppiesfrom2019litter/IMG-4343.JPG'
import litter110 from '../../assets/puppiesfrom2019litter/IMG-4344.JPG'
import litter111 from '../../assets/puppiesfrom2019litter/IMG-4345.JPG'
import litter112 from '../../assets/puppiesfrom2019litter/IMG-4346.jpg'

const Gallery2019 = () => {
  return (
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
  )
}

export default Gallery2019

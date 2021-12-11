import React from 'react'

import litter201 from '../../assets/2020litter/IMG_5275.JPG'
import litter202 from '../../assets/2020litter/IMG_5287.JPG'
import litter203 from '../../assets/2020litter/IMG_5297.JPG'
import litter204 from '../../assets/2020litter/IMG_5318.JPG'
import litter205 from '../../assets/2020litter/IMG_5346.JPG'
import litter206 from '../../assets/2020litter/IMG_5377.JPG'
import litter207 from '../../assets/2020litter/IMG_5431.JPG'
import litter208 from '../../assets/2020litter/IMG_5450.JPG'
import litter209 from '../../assets/2020litter/IMG_5457.JPG'
import litter210 from '../../assets/2020litter/IMG_6718.JPG'
import litter211 from '../../assets/2020litter/IMG_6810.JPG'
import litter212 from '../../assets/2020litter/IMG_6841.JPG'

const Gallery2020 = () => {
  return (
    <div className='litter-2020'>
      <h2>Spring Litter 2020</h2>
      <div className="gallery">
        <img src={litter201} alt='charcoal puppy' className='litter-image' />
        <img src={litter202} alt='second charcoal puppy' className='litter-image' />
        <img src={litter203} alt='silver and charcoal puppies' className='litter-image' />
        <img src={litter204} alt='two black puppies' className='litter-image' />
        <img src={litter205} alt='three charcoal puppies' className='litter-image' />
        <img src={litter206} alt='four chocolate puppies' className='litter-image' />
        <img src={litter207} alt='silver puppy' className='litter-image' />
        <img src={litter208} alt='charcoal puppy on brown fur' className='litter-image' />
        <img src={litter209} alt='black puppy on brown fur' className='litter-image' />
        <img src={litter210} alt='chocolate puppy on the lawn' className='litter-image' />
        <img src={litter211} alt='another chocolate puppy on the lawn' className='litter-image' />
        <img src={litter212} alt='charcoal puppy on the lawn' className='litter-image' />
      </div>
    </div>
  )
}

export default Gallery2020

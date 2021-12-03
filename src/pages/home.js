import React from 'react'

import PuppiesImg from '../assets/4pups.jpg'
import KimberMom from '../assets/silverfatherandkimber/Kimber-mom.JPG'
import DukeDad from '../assets/silverfatherandkimber/Duke-dad.JPG'

const Home = () => {
  return (
    <div className='home-page'>
      <div className='container'>
        <img src={PuppiesImg} alt='4 puppies of varying colors' className='home-banner' />
        <div className='home-centered'><strong>Mountain River Silver Labs</strong></div>
      </div>
      <div className='about'>
        <h2>About Us</h2>
        <p>
          Mountain River Silver Labs are silver factored Laborador Retrievers, we breed our
          black female, Kimber Mountain of Steel. She is a silver factored Lab, which means that
          she has the potential to have black, charcoal, brown, and silver puppies each time she 
          has a litter with a Silver Lab stud. The stud we have been using has moved and so we are 
          currently in the search for another Silver stud that is not related to Kimber.
        </p>
      </div>
      <div className='parent-info'>
        <div className='parent-card'>
          <div className='parent-text'>
            <h3>Kimber Mountain of Steel:</h3>
            <p className='content-left'>
              Kimber is a three year old silver factored AKC black lab and is the mother 
              to all of our litters.  Her father was a silver lab and her mother was a 
              yellow lab. She is 90lbs. Kimber loves children and other animals. She is 
              has a very active personality but is also gentle. She will play fetch all 
              day long and has a very athletic body and personality. She is a fantastic 
              family dog and loves to go on adventures. Kimber has had two litters and 
              is a wonderful mother to her puppies. All of her puppies are silver factored 
              puppies which means even if the puppy isn’t silver it has the possibility 
              to have silver puppies.
            </p>
          </div>
          <img src={KimberMom} alt='Kimber, a black lab' className='image-right' />
        </div>
        <div className='parent-card'>
          <img src={DukeDad} alt='Silver Duke, a silver lab' className='image-left' />
          <div className='parent-text'>
            <h3>Silver Duke 2:</h3>
            <p className='content-right'>
              Silver Duke 2 is a beautiful silver lab stud that we have used for our past two 
              litters. He has a very shiny coat and has an athletic body type making him a 
              fantastic hunting partner that he will pass onto his pups. He is 85lbs and enjoys 
              being with his family. All of his puppies are silver factored puppies and wonderful 
              companions. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PuppiesImg from '../assets/4pups.jpg'
import KimberMom from '../assets/silverfatherandkimber/Kimber-mom.JPG'
import DukeDad from '../assets/silverfatherandkimber/Duke-dad.JPG'
import logo4 from '../assets/logo-04-resize.png'
import logo4hover from '../assets/logo-04-1.png'
import Quality from '../assets/quality.png'
import QualityHover from '../assets/quality-1.png'
import Medical from '../assets/medical.png'
import MedicalHover from '../assets/medical-1.png'

const Home = () => {
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

  const isMobile = windowDimension <= 1000

  return (
    <div className='home-page'>
      {isMobile ? (
        <div className='mobile-banner'>
            <strong>Mountain River Silver Labs</strong>
        </div>
      ) : (
      <div className='container'>
        <img src={PuppiesImg} alt='4 puppies of varying colors' className='home-banner' />
        <div className='home-centered'>
          <strong>Mountain River Silver Labs</strong>
        </div>
      </div>
      )}
      <div className='about'>
        <h2>What is a Silver Factored Labrador Retiever?</h2>
        <p>
          Silver Factored Labrador Retrievers are just like any other Lab, except they carry the recessive 
          gene that allows for the possibilities of colors other than the typical black, chocolate, and yellow. 
          The Silver gene allows for muted colors such as Silver (muted Chocolate), Charcoal (muted Black), and 
          Champaigne (muted yellow).<br /><br />
          Mountain River Silver Labs all carry this recessive gene no matter what color they are, so if Breeding 
          Rights are purchased then anyone has the potential to have these muted colors. Mountain River Silvers 
          though are mainly black, chocolate, charcoal, and silver. There will probably never be any yellow or 
          champaigne labs in any of our litters.
        </p>
      </div>
      <div className='services-section'>
        <div className='services'>
          <a className='icon-link' href='https://www.akc.org/' target='_blank' rel='noreferrer'><img 
            src={Quality} 
            onMouseOver={e => (e.currentTarget.src = QualityHover)} 
            onMouseOut={e => (e.currentTarget.src = Quality)} 
            alt='a medal with a check mark' 
            className='icon' 
          />
          <h3>AKC Registered</h3></a>
        </div>
        <div className='services'>
          <Link to='/about-us#breeding' className='icon-link'><img 
            src={logo4} 
            onMouseOver={e => (e.currentTarget.src = logo4hover)} 
            onMouseOut={e => (e.currentTarget.src = logo4)} 
            alt='dog paw print logo' 
            className='icon' 
          />
          <h3>Breeding Rights Available</h3></Link>
        </div>
        <div className='services'>
          <Link to='/guaranteed-health' className='icon-link'><img 
            src={Medical}
            onMouseOver={e => (e.currentTarget.src = MedicalHover)} 
            onMouseOut={e => (e.currentTarget.src = Medical)}  
            alt='a medical icon' 
            className='icon' 
          />
          <h3>Guaranteed Health</h3></Link>
        </div>
      </div>
      <div className='testimonial'>
        <h3>Testimonial</h3>
        <em>
          "The Hammons were a dream to work with while we were adopting our puppy! They put so much time 
          and effort into taking care of the puppies and it really shows. Our dog is now 18 months old 
          and he is incredible, everywhere we go people stop and comment about how gorgeous he is. We 
          are so grateful we found Mountain River Silver Labs, we will definitely be purchasing another 
          puppy from them in the future."<br />
          <strong>- Sabrina N. | Rexburg, ID</strong>
        </em>
      </div>
      {isMobile ? (
        <div className='parent-info'>
          <h2>Meet the Parents</h2>
          <h3>Kimber's Mountain of Steel</h3>
          <img src={KimberMom} alt='Kimber, a black lab' className='mobile-pic-parent' />
          <p>
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
          <h3>Silver Duke 2</h3>
          <img src={DukeDad} alt='Silver Duke, a silver lab' className='mobile-pic-parent' />
          <p>
            Silver Duke 2 is a beautiful silver lab stud that we have used for our past two 
            litters. He has a very shiny coat and has an athletic body type making him a 
            fantastic hunting partner that he will pass onto his pups. He is 85lbs and enjoys 
            being with his family. All of his puppies are silver factored puppies and wonderful 
            companions. 
          </p>
        </div>
      ) : (
        <div className='parent-info'>
        <h2>Meet the Parents</h2>
        <div className='parent-card'>
          <div className='parent-text'>
            <h3>Kimber's Mountain of Steel:</h3>
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
      )}
    </div>
  )
}

export default Home

import React from 'react'
import { NavLink } from 'react-router-dom'

import Kimber from '../assets/silverfatherandkimber/IMG-3881.JPG'

const About = () => {
  return (
    <div className='about'>
      <h2 style={{ textAlign: 'center' }}>About Us</h2>
      <div className='about-grouping'>
        <h3>Who is Kimber's Mountain of Steel?</h3>
        <img src={Kimber} alt='Kimber looking off into the distance.' className='postImage' />
        <p>
          Born in 2018, Kimber is a Silver Factored Black Labrador Retriever who is an amazing family 
          dog. This means that she has the potential to have black, charcoal, brown, and silver puppies 
          each time she has a litter with a Silver Lab stud. She has had 2 litters as of 2021, with Silver 
          Duke 2, one of the most well known Silver Lab Studs in the Eastern Idaho area. She is on the 
          look out for a new stud, as Silver Duke 2 has moved out of the Idaho area. Kimber loves kids, 
          and playing fetch under any condition possible. She is full of energy and obedient.
        </p>
      </div>
      <div className='about-grouping'>
        <h3>Who are the Hammons?</h3>
        <p>
          The Hammons absolutely love dogs but especially Labrador retrievers. The Hammon family are 
          Idahoans through and through, born and raised. They are a hard working family, who enjoy 
          hunting, fishing, and pretty much anything outdoors they can do with their Labs. Maycee 
          and Riley started breeding Kimber in order to pay for college expenses. They spend countless 
          hours with the puppies to ensure they are well socialized and ready to go to their new homes. 
          They love helping others add a wonderful companion to their families and seeing the wonderful 
          homes that all of their puppies go to.
        </p>
      </div>
      <div className='about-grouping'>
        <h3 id='breeding'>What are Breeding Rights?</h3>
        <p>
          Dog breeders can be found almost anywhere. The question is, are they ethical breeders who offer 
          proper breeding rights for their dogs. Breeding rights cover your ability to breed and register 
          the puppies of a bloodline born as part of the American Kennel Club (AKC) or other breeding clubs. 
          These rights are mostly used by breeders to ensure their bloodline is developed properly when 
          selling pups to outside parties. While these rights provide protections for both breeders and 
          buyers, they also protect the dogs involved as well.
          <br />
          <em className='source'>
            Source: <a 
                      className='source-link'
                      href='https://petkeen.com/breeding-rights-for-dogs/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      https://petkeen.com/breeding-rights-for-dogs/
                    </a>
          </em>
        </p>
        <NavLink to='/guaranteed-health' className='to-health'>
          More about our Health Guarantee
        </NavLink>
      </div>
    </div>
  )
}

export default About

import React from 'react'

const Health = () => {
  return (
    <div className='health'>
      <h2 style={{ textAlign: 'center' }}>Healthy Puppies Guaranteed</h2>
      <h3>Why do we remove Dewclaws?</h3>
      <p>
        Dewclaws are like the thumb of a dog's front paws. Within 3 days of being born, 
        we use a numbing cream on each puppy's front paws to reduse feeling, then we use 
        some surgical scissors to clip each dewclaw off. The puppies are not in any terrible 
        pain and are all fine and happy just a few minutes later.
        <br /><br />
        Dewclaws serve no purpose other than getting in the way — they snag on carpets, 
        they get caught on toys or furniture, and so on. Better to have it removed cleanly 
        than to have your dog accidentally rip a dewclaw off, causing him unnecessary pain 
        and risking infection.
        <br />
        <em className='source'>
          Source: <a 
                    className='source-link'
                    href='https://www.dummies.com/pets/dogs/why-remove-a-dogs-dewclaw/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://www.dummies.com/pets/dogs/why-remove-a-dogs-dewclaw/
                  </a>
        </em>
      </p>
      <h3>1st Set of Vaccines</h3>
      <p>
        Every dog should be vaccinated, that way everyone's best friend can stick around for 
        as long as possible! During our time with our litters, we make sure that each and 
        every puppy gets their first round of vaccines so that they are protected and will 
        be ready to go to their new homes strong and healthy.
      </p>
      <h3>Deworming</h3>
      <p>
        Every two weeks, we give each puppy the dewormer to ensure that they 
        do not risk getting any worms or parasites during the course of their 
        time before adoption with us. This biweekly deworming should continue until 
        they are about twelve weeks of age.
        <br /><br />
        Puppies are susceptible to intestinal parasites which can include roundworms, 
        hookworms, tapeworms, and whipworms. Deworming your pet will assist in the prevention 
        of illnesses caused by these intestinal parasites.
        <br />
        <em className='source'>
          Source: <a 
                    className='source-link'
                    href='https://www.ethosvet.com/blog-post/the-importance-of-deworming/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://www.ethosvet.com/blog-post/the-importance-of-deworming/
                  </a>
        </em>
      </p>
    </div>
  )
}

export default Health

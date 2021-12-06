import React from 'react'

const Health = () => {
  return (
    <div className='health'>
      <h2 style={{ textAlign: 'center' }}>Healthy Puppies Guaranteed</h2>
      <h3>Why do we remove Dewclaws?</h3>
      <p>
        Dewclaws are like the thumb of a dog's front paws. Within 3 days of being born, 
        we use _______ a numbing cream and some surgical scissors to clip the dewclaw off.
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
        __________
      </p>
      <h3>Deworming</h3>
      <p>
        Every ______ amount of time, we give each puppy the dewormer to ensure that they 
        do not risk getting any worms during the course of their time before adoption with 
        us.
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

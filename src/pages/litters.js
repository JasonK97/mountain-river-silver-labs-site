import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Where from './where-are-they'
import Gallery from './gallery'

const Litters = () => {
  const [tab, setTab] = useState(false)

  function changeTabWhere() {
    setTab(true)
  }

  function changeTabGallery() {
    setTab(false)
  }

  return (
    <div className='litters-page'>
      <div className='litter-nav'>
        <NavLink 
          to='/litters/where-are-they-now' 
          className='litter-link' 
          activeClassName='litter-link-active'
          onClick={changeTabWhere}
        >
          Where are they now?
        </NavLink>
        <NavLink 
          to='/litters/gallery' 
          className='litter-link' 
          activeClassName='litter-link-active'
          onClick={changeTabGallery}
          active
        >
          Image Gallery
        </NavLink>
      </div>
      {tab ? (
        <Where />
      ) : (
        <Gallery />
      )}
    </div>
  )
}

export default Litters

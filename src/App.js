import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import NavBar from './components/navbar'
import MobileNav from './components/mobile-nav'

import Home from './pages/home'
import About from './pages/about'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Create from './pages/create'
import Edit from './pages/edit'
import Gallery from './pages/gallery'
import Health from './pages/health'
import Litters from './pages/litters'
import NoMatch from './pages/no-match'
import Post from './pages/post'
import SignIn from './pages/sign-in'
import Where from './pages/where-are-they'

function App() {
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
    <Router>
      {isMobile ? (
        <MobileNav />
      ) : (
        <NavBar />
      )}
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={SignIn} />
          <Route path='/about-us' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/create' component={Create} />
          <Route path='/edit/:slug' component={Edit} />
          {/* <Route path='/litters/gallery' component={Gallery} /> */}
          <Route path='/guaranteed-health' component={Health} />
          <Route path='/litters' component={Litters} />
          <Route path='/404' component={NoMatch} />
          <Route path='/blog/:slug' component={Post} />
          {/* <Route path='/litters/where-are-they-now' component={Where} /> */}
        </Switch>
      </main>
    </Router>
  )
}

export default App

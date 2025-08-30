import React from 'react'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Project'
import Choose from './components/Choose'
import Contact from './components/Contact'
import Gallery from './components/Gallery'

export default function page() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Project />
      <Gallery />
      <Choose />
      <Contact />
    </div>
  )
}

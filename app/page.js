import React from 'react'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Project from './components/Project'
import Choose from './components/Choose'
import Contact from './components/Contact'

export default function page() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Project />
      <Choose />
      <Contact />
    </div>
  )
}

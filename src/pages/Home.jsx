import React from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ChurchTimer from '../components/ChurchTimer'
import BibleVerse from '../components/BibleVerse'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <TopBar/>
      <Navbar />
      <Hero />
      <ChurchTimer />
      <BibleVerse />
      <Gallery />
      <Contact />
      
    </div>
  )
}

export default Home
import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChurchTimer from './components/ChurchTimer';
import BibleVerse from './components/BibleVerse';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <ChurchTimer />
      <BibleVerse />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

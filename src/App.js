import React from 'react'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ParticlesComp from './components/ParticlesComp'
import "animate.css/animate.min.css";

const App = () => {
  return (
    <>
      <ParticlesComp />
      <Main />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
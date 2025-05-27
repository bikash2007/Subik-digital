import React from 'react'
import Hero from './Landing/Hero'
import OurServices from './Landing/OurServices'
import Navbar from './Components/Navbar'
import GraphicProjects from './Landing/GraphicProjects'
import WebProjects from './Landing/WebProjects'
import Footer from './Components/Footer'
import About from './Landing/About'
import Pricing from './Landing/Pricing'

const App = () => {
  return (
    <div>
    <Navbar/>

     <Hero/>
     <OurServices/>
     <GraphicProjects/>
     <WebProjects/>
     <About/>
      <Pricing/>
     <Footer/>
    </div>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex flex-col justify-between  text-white">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App

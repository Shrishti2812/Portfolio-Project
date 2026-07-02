import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex flex-col justify-between  text-white">
    <Navbar/>
    <Hero/>
    <About/>
    <Footer/>
    </div>
    </>
  )
}

export default App

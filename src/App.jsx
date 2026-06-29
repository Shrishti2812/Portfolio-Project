import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex flex-col justify-between   text-white">
    <Navbar/>
    <Footer/>
    </div>
    </>
  )
}

export default App

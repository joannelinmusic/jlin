import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'

function App () {
  
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/About" element={<About />} />
          <Route path = "/Projects" element={<Projects />} />
          <Route path = "/Gallery" element={<Gallery />} />
          
        </Routes>
      </div>
    </>
  )
}

export default App

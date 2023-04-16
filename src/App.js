import React from 'react'
// import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Gallery from './pages/Gallery'

function App () {
  let component
  switch(window.location.pathname) {
    case "/" : 
      component = <Home />
      break
    case "/About":
      component = <About />
      break
    case "/Gallery":
      component = <Gallery />
      break

  }
  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default App

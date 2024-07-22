import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Programs from './Components/Programs/Programs'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
      <div>
      <Header></Header>
      <div className='pt-24'>
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Programs" element={<Programs></Programs>}></Route> 
      </Routes>
      </div>
      <Footer></Footer>
      </div>
    </Router>
  )
}

export default App

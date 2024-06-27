import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
      
    </>
  )
}

export default App

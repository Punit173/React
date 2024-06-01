import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Blue from './Blue'
import {Route,Routes} from 'react-router-dom'
import Green from './Green'
import Red from './Red'
import Grey from './Grey'
import Black from './Black'



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Blue/>}/>
        <Route path='/green' element={<Green/>}/>
        <Route path='/red' element={<Red/>}/>
        <Route path='/grey' element={<Grey/>}/>
        <Route path='/black' element={<Black/>}/>     
      </Routes>
    </>
  )
}

export default App

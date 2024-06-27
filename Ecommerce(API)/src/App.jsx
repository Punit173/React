import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Additem from './Additem';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/additem' element={<Additem />} />
      </Routes>
    </>
  )
}

export default App

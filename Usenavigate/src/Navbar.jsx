import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const home = ()=>{
        navigate('/')
    }
    const contact = ()=>{
        navigate('/contact')
    }
    const about = ()=>{
        navigate('/about')
    }

  return (
    <div>
      <button onClick={home}>Home</button>
      <button onClick={contact}>Contact</button>
      <button onClick={about}>About</button>
    </div>
  )
}

export default Navbar

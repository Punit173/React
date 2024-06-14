import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const info = useSelector((state)=>state);
  return (
    <div>
      <h1>Redux - ToDo List : {info.tasks.length}</h1>
    </div>
  )
}

export default Navbar

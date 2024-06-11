import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {

    const info = useSelector((state)=>state);

  return (
    <>
    <h1>Available books are : {info.book}</h1>
    </>
  )
}

export default Navbar;

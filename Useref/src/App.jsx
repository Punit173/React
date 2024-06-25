import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const reference = useRef();

  function changeeve() {
    reference.current.style.backgroundColor = "red";
  }

  function reseteve() {
    reference.current.style.backgroundColor = "initial";
  }

  return (
    <>
      {/* <input ref={reference} type="text" /> */}
      <div ref={reference} style={{height:"50px",border:"5px solid black",backgroundColor:"orange"}}>

      </div>
      <button onClick={changeeve}>Change color</button>
      <button onClick={reseteve}>Reset color</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const reference = useRef();

  function focuseve(){
    reference.current.style.color = "red";  
  }

  return (
    <>
      <input ref={reference} type="text" />
      <button onClick={focuseve}>Focus content</button>
    </>
  )
}

export default App

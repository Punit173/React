import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [minus, setMinus] = useState(500)

  function plus (){
    setCount(count+1);
  }

  function sb () {
    setMinus(minus-1);
  }

  const multiply = useMemo(()=>{
    console.log("*******")
    return count*10
  },[count])

  return (
    <>
    <span>{count}</span>
      <button onClick={plus}>Increment</button>
      <br />
      <span>{minus}</span>
      <button onClick={sb}>Decrement</button>
      <h1>Multiplication : {multiply}</h1>
    </>
  )
}

export default App

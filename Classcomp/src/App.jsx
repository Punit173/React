import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Classcomp from './Classcomp'
import Classcomp1 from './ClassComp1'
import Classcomp2 from './Classcomp2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Classcomp2/>
    </>
  )
}

export default App

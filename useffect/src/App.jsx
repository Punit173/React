import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Useff from './Useff'
import Map from './Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Useff/> */}
      <Map/>
    </>
  )
}

export default App

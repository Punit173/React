import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassA from './ClassA'
import A from './ContextAPI/A'
import { createContext } from 'react'

const data = createContext();
function App() {

  const name = "Naman";
  const age = 28;
  return (
    <>
      <data.Provider value={name}>
        <A/>
      </data.Provider>
      {/* <ClassA name="Naman" age={28} gender="Male"/> */}
    </>
  )
}

export default App
export {data};

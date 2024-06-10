import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassA from './ClassA'
import A from './ContextAPI/A'
import { createContext } from 'react'

const data = createContext();
const data1 = createContext();
function App() {

  const name = "Naman";
  const age = 28;
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <A/>
        </data1.Provider>
      </data.Provider>
      {/* <ClassA name="Naman" age={28} gender="Male"/> */}
    </>
  )
}

export default App
export { data,data1 };

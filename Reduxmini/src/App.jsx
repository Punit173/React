import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reducer from './Reducer'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

function App() {
  
  const store = createStore(Reducer);

  return (
    <>
      <Provider store={store}>
        <ComponentA/>
        <ComponentB/>
      </Provider>
    </>
  )
}

export default App

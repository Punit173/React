import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Data from './Data'
import Reducer from './Reducer'
import './App.css'

function App() {
  const store = createStore(Reducer);
  return (
    <>
      <Provider store={store}>
        <Data/>
      </Provider>
    </>
  )
}

export default App

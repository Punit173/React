import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RootReducer from './Reducers/RootReducer'
import Display from './Display'
import './App.css'

function App() {

  const store = createStore(RootReducer)


  return (
    <>
      <Provider store={store}>
        <Display/>
      </Provider>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Reducer'
import './App.css'
import Addtask from './Addtask'
import Navbar from './Navbar'
import Showtask from './Showtask'

function App() {

  const store = createStore(Reducer);

  return (
    <>
      <Provider store={store}>
        <Navbar/>
        <Addtask/>
        <Showtask/>
      </Provider>
    </>
  )
}

export default App

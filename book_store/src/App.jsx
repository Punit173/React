import './App.css'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Reducer'
import Navbar from './Navbar'
import Items from './Items'

function App() {
  
  const store = createStore(Reducer);

  return (
    <>
      <Provider store={store}>
        <Navbar/>
        <Items/>
      </Provider>
    </>
  )
}

export default App

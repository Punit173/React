import React from 'react'
import { useDispatch } from 'react-redux'

const Items = () => {
    const dispatch = useDispatch()

    function buy(){
        dispatch({type:'Buy_book'});
    }

    function sell(){
        dispatch({type:'Sell_book'});
    }
  return (
    <div>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>Sell</button>
    </div>
  )
}

export default Items

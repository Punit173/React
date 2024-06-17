import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    const info = useSelector(store=>store.UserReducer)
    const infor = useSelector(store=>store.ItemReducer)

  return (
    <div>
        <h1>Total users exist are : {info.username.length}</h1>
        <h1>Total items exist are : {infor.itemname.length}</h1>
    </div>
  )
}

export default Display

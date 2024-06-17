import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    const info = useSelector(store=>store.UserReducer)
    const infor = useSelector(store=>store.ItemReducer)

  return (
    <div>
        <h1>{info.username}</h1>
        <h1>{infor.itemname}</h1>
    </div>
  )
}

export default Display

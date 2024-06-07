import React from 'react'
import { data } from '../App'

const C = () => {
  return (
    <div>
        <data.Consumer>
            {
                (value)=>{
                    return(
                        <>
                        <h1>My name is : {value}</h1>
                        </>
                    )
                }
            }
        </data.Consumer>
    </div>
  )
}

export default C

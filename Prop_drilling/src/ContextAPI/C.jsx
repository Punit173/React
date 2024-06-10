import React from 'react'
import { data,data1 } from '../App'
import { useContext } from 'react'

const C = () => {
    const user_name = useContext(data);
    const user_age = useContext(data1);
  return (
    <div>
        {/* <data.Consumer>
            {
                (value)=>{
                    return(
                        <data1.Consumer>
                            {(age)=>{
                                return(
                                    <>
                                    <h1>My name is : {value}</h1>
                                    <h1>My age is : {age}</h1>
                                    </>
                                )
                            }}
                        </data1.Consumer>
                    )
                }
            }
        </data.Consumer> */}
        <h1>{user_name}</h1>
        <h1>{user_age}</h1>
    </div>
  )
}

export default C

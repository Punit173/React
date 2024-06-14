import React from 'react'
import { useDispatch } from 'react-redux'


const Temp = (Props) => {

    const dispatch = useDispatch();

    function delete_task(){
        dispatch({type:"Delete_task",payload:Props.task})
    }

  return (
    <div style={{display:"flex",gap:"25vw",justifyContent:"center",alignItems:"center"}}>
      <h3 style={{display:"inline"}}>{Props.task}</h3>
      <button onClick={delete_task} style={{backgroundColor:"red" , height:"45px"}}>Delete</button>
    </div>


)
}

export default Temp

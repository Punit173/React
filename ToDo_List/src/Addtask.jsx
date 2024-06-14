import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

const Addtask = () => {
    
    const dispatch = useDispatch();
    const [task_name,setname] = useState('');

    function update(){
        dispatch({type:'Add_task',payload:task_name})
    }

  return (
    <div>
      <h2>Add your tasks here : </h2>
      <input type="text" onChange={(e)=>{
        setname(e.target.value)
      }} placeholder='Enter your task' />
      <button onClick={update}>Add</button>
    </div>
  )
}

export default Addtask

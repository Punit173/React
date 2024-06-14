import React from 'react'
import { useSelector } from 'react-redux'
import Temp from './Temp';

const Showtask = () => {
    const infor = useSelector((state)=>state);
    const tasklist = infor.tasks.map((e)=>{
        return <Temp key={e.id} task={e}/>
    })
  return (
    <div>
      {tasklist}
    </div>
  )
}

export default Showtask

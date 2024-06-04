import React from "react";
import { useState,useEffect } from "react";

const Useff = () => {

    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${num1+(-num2)} times`;
        console.log("This is useeffect")
    })

    return(
        <>
        <button onClick={()=>{setNum1(num1+1)}}>Add</button>
        <span>{num1}</span>
        <br />
        <br />
        <button onClick={()=>{setNum2(num2-1)}}>Minus</button>
        <span>{num2}</span>

        </>
    )
}

export default Useff;
import React from "react";
import { useState } from "react";

function IncDec(){
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    function update1(){
        setCount1(count1+1)
    }
    function update2(){
        setCount2(count2-1)
    }

    return(
        <>
            <h1>Increment & Decrement</h1>
            <button onClick={update1}>Increment</button>
            <span>{count1}</span>
            <br />
            <button onClick={update2}>Decrement</button>
            <span>{count2}</span>
        </>
    )
}

export default IncDec;
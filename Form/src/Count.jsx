import React from "react";
import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0)


    function update1() {
        setCount(count + 1)
    }

    function update2() {
        setCount(count - 1)
    }
    return (
        <>
            <h1>Count Application </h1>

            <button onClick={update1}>+ </button>
            <span>{count}</span>
            <button onClick={update2}>-</button>
        </>
    )
}
export default Count
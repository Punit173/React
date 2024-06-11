import { useSelector } from "react-redux";
import React from "react";

const Data = () => {
    const info = useSelector((store)=>store);
    return(
        <>
            <h1>Available books are : {info.book}</h1>
        </>
    )
}

export default Data;
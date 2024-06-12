import React from 'react'
import { useSelector } from 'react-redux'

const ComponentA = () => {

    const info = useSelector((state) => state);

    return (
        <>
            <h1>React-Payload</h1>
            <h1>Game-Name : {info.game}</h1>
            <h1>Player-Name : {info.player}</h1>
        </>
    )
}

export default ComponentA

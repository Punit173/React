import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

const ComponentB = () => {

    const [gamename, setgame] = useState('');
    const [playername, setname] = useState('');

    const dispatch = useDispatch();

    function setg() {
        dispatch({ type: 'Game_name', payload: gamename })
    }

    function setn() {
        dispatch({ type: 'Player_name', payload: playername })
    }

    return (
        <>
            <input type="text" onChange={(e) => {
                setgame(e.target.value);
            }} placeholder='Enter game name' />
            <button onClick={setg}>Change Game</button>
            <br />
            <input type="text" onChange={(e) => {
                setname(e.target.value);
            }} placeholder='Enter player name' />
            <button onClick={setn}>Change Player</button>
        </>
    )
}

export default ComponentB

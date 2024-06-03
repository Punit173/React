import React from "react";
import { useState } from "react";
import './theme.css'

const Theme = () => {
    const [theme,setTheme] = useState(false);

    function toggleswitch(){
        setTheme(!theme);
    }

    return (
        <>
        <div className={`app ${theme?`darktheme`:`lighttheme`}`}>
            <h1>Click to change the theme.</h1>
            <button onClick={toggleswitch}> {theme?`Switch to light mode`:`Switch to dark mode`} </button>
        </div>
        </>
    )
}

export default Theme;
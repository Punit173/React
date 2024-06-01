import React from "react";
import {Link} from "react-router-dom";

function Navbar(){

    return(
        <>
        <button><Link to='/'>Blue</Link></button>
        <button><Link to="/green">Green</Link></button>
        <button><Link to="/red">Red</Link></button>
        <button><Link to="/grey">Grey</Link></button>
        <button><Link to="/black">Black</Link></button>
        </>
    )
}

export default Navbar;
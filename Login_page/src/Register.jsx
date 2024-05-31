import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register(){

    const [name,setName] = useState('');
    const [pass,setPass] = useState('');

    function updateu(e){
        setName(e.target.value);
    }

    function updatep(e){
        setPass(e.target.value);
    }

    const data={
        username:name,
        password:pass
    }

    function uploaddata(){
        localStorage.setItem('data',JSON.stringify(data));
        alert("User registered successfully!!")
    }

    



    return(
        <>
        <h1>Register</h1>
        <br />
        <label htmlFor="">Username : </label>
        <input type="text" onChange={updateu} name="" placeholder="Enter your username" id="" />
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input type="password" onChange={updatep} name="" placeholder="Enter your password" id="" />
        <br /><br />    
        <button className="btn btn-primary" onClick={uploaddata} type="submit">Submit</button>
        </>
    )
}

export default Register;
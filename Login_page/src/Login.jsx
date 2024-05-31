import React from "react";
import { useState } from "react";

function Login(){

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

    function checkdata(){
        const obj = JSON.parse(localStorage.getItem('data'));
        if(obj.username==name && obj.password==pass){
            alert("Login successfully!!");
        }
        else{
            alert("Invalid credentials!!");
        }
    }

    return(
        <>
        <h1>Login Page</h1>
        <br />
        <label htmlFor="">Username : </label>
        <input type="text" name="" onChange={updateu} placeholder="Enter your username" id="" />
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input type="password" name="" onChange={updatep} placeholder="Enter your password" id="" />
        <br /><br />    
        <button className="btn btn-primary" onClick={checkdata} type="submit">Submit</button>
        </>
    )
}

export default Login;
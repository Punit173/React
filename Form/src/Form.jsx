import React from "react";
import { useState } from "react";

const Form = ()=>{
    const [name,setName] = useState('Ram');
    const [email,setMail] = useState('');
    const [contact,setContact] = useState('');
    const [pass,setPass] = useState('');

    function update(e){
        setName(e.target.value)
    }

    function update1(e){
        setMail(e.target.value)
    }
    function update2(e){
        setContact(e.target.value)
    }
    function update3(e){
        setPass(e.target.value)
    }

    const arr={
        name:name,
        email:email,
        cont:contact,
        pas:pass
    }
    
    function add(){
        alert("Added successfully");
        localStorage.setItem('Data',JSON.stringify(arr));
    }

    return(
        <>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                <h2>Login Form</h2>
                <div>
                    <label htmlFor="">Name : </label>
                    <input onChange={update} type="text" value={name} name="" id="" />
                    {name}

                </div>
                <div>
                    <label htmlFor="">E-mail : </label>
                    <input onChange={update1} value={email} type="email" name="" id="" />
                    {email}
                </div>
                <div>
                    <label htmlFor="">Contact number : </label>
                    <input onChange={update2} value={contact} type="number" name="" id="" />
                    {contact}
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input onChange={update3} value={pass} type="password" name="" id="" />
                    {pass}
                </div>
                <div>
                    <button style={{padding:"10px",backgroundColor:"blue",color:"white"}} type="submit">Submit</button>
                    <button style={{padding:"10px",backgroundColor:"blue",color:"white"}} onClick={add} type="submit">Add to Local Storage</button>
                </div>
            </div>
        </>
    )
}

export default Form;
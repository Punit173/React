import React from 'react'
import { useSelector } from 'react-redux'
import Hometemp from './Hometemp'
import { useState } from 'react'
import axios from "axios"


const Home = () => {

    const [res,setRes] = useState([]);

    // axios
    //     .get("https://fakestoreapi.com/products")
    //     .then((response)=>{
    //         console.log(response.data)
    //         setRes(response.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    async function getData() {
        const data = await fetch("https://fakestoreapi.com/products");
        const res1 = await data.json();
        setRes(res1);
    }

    getData();


  const compo = res.map((e) => {
    return (
      <div className='col-md-4'>
        <Hometemp key={e.id} element={e}/>
      </div>
    )
  })



  return (
    <div className="container">
      <div className="row">{compo}</div>
    </div>
  )
}

export default Home

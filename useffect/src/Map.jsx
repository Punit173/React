import React from 'react'


const Map = () => {

    // const languages = ['C','C++','Java','Python']
    // const person = {
    //     "name":"Naman",
    //     "age":25,
    //     "address":"Indore"
    // }
    // const person1 = {
    //     "name":"Dalit",
    //     "age":15,
    //     "address":"Indore"
    // }
    // const person2 = {
    //     "name":"Aman",
    //     "age":30,
    //     "address":"Indore"
    // }
    // const person3 = {
    //     "name":"Rahul",
    //     "age":18,
    //     "address":"Indore"
    // }

    const data = [{
        "name":"Naman",
        "age":25,
        "address":"Indore"
    },{
        "name":"Dalit",
        "age":15,
        "address":"Indore"
    },{
        "name":"Aman",
        "age":30,
        "address":"Indore"
    },{
        "name":"Rahul",
        "age":18,
        "address":"Indore"
    }]

  return (
    <>
        {
            data.map((el)=>{
                return (
                    <>
                    <h1>{el.name}</h1>
                    <h1>{el.age}</h1>
                    <h1>{el.address}</h1>
                    </>
                )
            })
        }
    </>
  )
}

export default Map

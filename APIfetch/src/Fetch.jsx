import React from 'react'
import { useState, useEffect } from 'react';

const Fetch = () => {

    const [data, setData] = useState([]);

    // const data1 = [{id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3, description: 'Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.', category: "men's clothing"}]


    useEffect(() => {
        async function fetchapi() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                // console.log(response);

                const JSONdata = await response.json();
                // console.log(JSONdata);

                // console.log('data is : ', data)
                setData(JSONdata);
                // console.log('data is : ', data)

            }
            catch (error) {
                console.log("Error occurred : ", error);
            }
        }
        fetchapi();
    }, [])
    return (
        <>
            <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>{
                data.map((ele)=>{
                    return (
                        <>
                            <div style={{height:"300px",backgroundColor:"cyan",border:"5px solid black",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <h2>{ele.id}</h2>
                            <h6 style={{width:"100px"}}>{ele.title}</h6>
                            <img height={150} width={200}  src={ele.image} alt="" />
                            </div>
                        </>
                    )
                })
            }
          </div>
        </>
    )
}

export default Fetch;

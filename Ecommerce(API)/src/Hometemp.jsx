import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faRupee } from '@fortawesome/free-solid-svg-icons';



const Hometemp = (Props) => {

    // const dispatch = useDispatch();
    // // console.log(Props.element)

    // function addcart() {
    //     dispatch({ type: "Add_cart", payload: Props.element})
    //     alert("Added successfully!!")
    // }

    return (
        <div style={{display: "flex" }}>
            <div className="card">
                <img src={Props.element.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Props.element.title}</h5>
                    <h5 className="card-title"><FontAwesomeIcon icon={faIndianRupee} /> {Props.element.price}</h5>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

    )
}

export default Hometemp

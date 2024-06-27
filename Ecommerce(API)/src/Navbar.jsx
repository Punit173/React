import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faWarehouse, faHome } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    // const info = useSelector(store => store.cartreducer);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img width={100} src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-around " id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-around align-items-center" style={{ gap: "250px" }}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'> <FontAwesomeIcon icon={faHome} /> HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/additem'> <FontAwesomeIcon icon={faWarehouse} /> ADD ITEM</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/cart'> <FontAwesomeIcon icon={faCartShopping} /> CART :</Link>
                            </li>
                            <li className='nav-item'>
                                <FontAwesomeIcon icon={faSearch} />
                                <input type="text" placeholder='Search' className='p-1 rounded-pill' />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

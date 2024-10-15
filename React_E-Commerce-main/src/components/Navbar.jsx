import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase/firebase'; // Firebase config and auth
import { signOut } from 'firebase/auth'; // Import signOut from Firebase

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    const [user] = useAuthState(auth); // Check if the user is logged in with Firebase

    // Function to handle logout
    const handleLogout = async () => {
        await signOut(auth); // Firebase signOut function
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">🔥FireSource🔥</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    <div className="d-flex">
                        {!user ? (
                            <>
                                <NavLink to="/login" className="btn btn-outline-primary m-2">
                                    <i className="fa fa-sign-in-alt me-1"></i> Login
                                </NavLink>
                                <NavLink to="/register" className="btn btn-outline-success m-2">
                                    <i className="fa fa-user-plus me-1"></i> Register
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/profile" className="btn btn-outline-info m-2">
                                    <i className="fa fa-user me-1"></i> Profile
                                </NavLink>
                                <button className="btn btn-outline-danger m-2" onClick={handleLogout}>
                                    <i className="fa fa-sign-out-alt me-1"></i> Logout
                                </button>
                            </>
                        )}
                        <NavLink to="/cart" className="btn btn-outline-warning m-2">
                            <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

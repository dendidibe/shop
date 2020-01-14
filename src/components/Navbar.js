import React from 'react'
import {Link} from "react-router-dom";


 export const Navbar = () => {
    return (
        <nav className='deep-purple accent-3'>
            <div className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="logo left-align">Logo</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">Shopping Cart</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
 }
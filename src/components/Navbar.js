import React from 'react'
import {Link} from "react-router-dom";


 export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">Shopping Cart</Link></li>
                </ul>
            </div>
        </nav>
    )
 }
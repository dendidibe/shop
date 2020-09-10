import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../images/logo.png";

export const Navbar = () => {
  const addedItems = useSelector((state) => state.addedItems);

  return (
    <nav className="deep-purple accent-3">
      <div className="nav-wrapper">
        <div className="nav-container">
          <Link to="/" className="logo left-align">
            <img src={logo} alt="logo" />
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">
                Shopping Cart
                {addedItems.length > 0 ? (
                  <span className="shop-items">{addedItems.length}</span>
                ) : null}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

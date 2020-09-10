import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const addedItems = useSelector((state) => state.addedItems);
  const total = useSelector((state) => state.total);

  return (
    <div className="container">
      <h3 className="center">Total: {total} $</h3>
      <div className="row">
        {addedItems.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

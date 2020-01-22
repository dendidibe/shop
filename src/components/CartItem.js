import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { addQuantity, subQuantity, removeFromCart } from "./actions/actions";

const CartItem = ({ item, addQuantity, subQuantity, removeFromCart }) => {

  const handleAddQuantity = id => {
    addQuantity(id);
    M.toast({ html: "Quantity added" });
  };
  const handleSubQuantity = id => {
    subQuantity(id);
    M.toast({ html: "Quantity subbed" });
  };
  const removeHandler = id => {
    removeFromCart(id);
    M.toast({ html: "Item removed" });
  };

  return (
      <div className="col m6 l4" >
        <div className="shop-card">
            <button className="btn remove-btn" onClick={() => removeHandler(item.id)}>Remove</button>
          <div className="title">
            {item.title}
          </div>
          <div className="desc">
          </div>
          <figure>
            <img src={item.img} alt={item.title} className="card-image"/>

          </figure>
          <div className="cta">
            <div className="price">Items: {item.quantity}</div>
            <div className="button-controls">
              <button className="btn" onClick={() => handleSubQuantity(item.id)}>-</button>
              <button className="btn" onClick={() => handleAddQuantity(item.id)}>+</button>
            </div>
          </div>
        </div>
      </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addQuantity: id => dispatch(addQuantity(id)),
    subQuantity: id => dispatch(subQuantity(id)),
    removeFromCart: id => dispatch(removeFromCart(id))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

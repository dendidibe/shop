import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { addQuantity, subQuantity, removeFromCart } from "./actions/actions";

const CartItem = ({ item, addQuantity, subQuantity, removeFromCart }) => {

  const handleAddQuantity = id => {
    addQuantity(id);
    M.toast({ html: "Quantity added" });
    console.log(item)
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
    <div className="col s12 m6 l4" >
      <div className="card">
        <div className="card-image height-200">
          <button
            className="example_a remove"
            onClick={() => removeHandler(item.id)}
          >
            X
          </button>
          <img src={item.img} alt={item.desc} />
        </div>
        <div className="card-content">
          <div className="item-desc">
            <span className="card-title">{item.title}</span>
            <span className="item-quantity">{item.quantity}</span>
          </div>
          <div className="button-controls">
            <span className="item-price">{item.price} $</span>
            <div>
            <button
              className="deep-purple accent-3 quantity-button"
              onClick={() => handleAddQuantity(item.id)}
            >
              +
            </button>
            <button
              className="deep-purple accent-3 quantity-button"
              onClick={() => handleSubQuantity(item.id)}
            >
              -
            </button>

            </div>
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

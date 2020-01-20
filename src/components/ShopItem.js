import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { addToCart } from "./actions/actions";

const ShopItem = ({ item, addToCart }) => {
  const handleClick = id => {
    addToCart(id);
    M.toast({ html: "Item added to cart" });
  };

  return (
    <div className="col s6 l4" >
      <div className="card">
        <div className="card-image height-200">
          <img src={item.img} alt={item.desc} />
          <button
            className="btn-floating halfway-fab waves-effect waves-light deep-purple accent-2 flex"
            onClick={() => handleClick(item.id)}
          >
            +
          </button>
        </div>
        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p>{item.desc}</p>
          <span className="card-price">{item.price}$</span>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    addedItems: state.addedItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);

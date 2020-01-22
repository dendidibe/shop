import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { addToCart } from "./actions/actions";
import '../ShopItem.css'

const ShopItem = ({ item, addToCart }) => {
  const handleClick = id => {
    addToCart(id);
    M.toast({ html: "Item added to cart" });
  };

  return (
      <div className="col m6 l4" >
        <div className="shop-card">
          <div className="title">
            {item.title}
          </div>
          <div className="desc">
          </div>
          <figure>
          <img src={item.img} alt={item.title} className="card-image"/>

          </figure>
          <div className="cta">
            <div className="price">${item.price}</div>
            <button className="btn" onClick={() => handleClick(item.id)}>
              Add to cart
            </button>
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

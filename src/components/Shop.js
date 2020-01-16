import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { addToCart } from "./actions/actions";

const Shop = ({ addToCart, items }) => {
  const handleClick = id => {
    addToCart(id);
    M.toast({ html: "Item added to cart" });
  };

  let itemList = items.map(item => {
    return (
      <div className="col s12 m6 l4" key={item.id}>
        <div className="card">
          <div className="card-image">
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
  });

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="row">
        <div className="col s12">{itemList}</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    items: state.items,
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

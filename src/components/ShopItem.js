import React from "react";
import { useDispatch } from "react-redux";
import M from "materialize-css";
import { addToCart } from "./actions/actions";
import "../ShopItem.css";

const ShopItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addToCart(id));
    M.toast({ html: "Item added to cart" });
  };

  return (
    <div className="col m6 l4">
      <div className="shop-card">
        <div className="title">{item.title}</div>
        <div className="desc"></div>
        <figure>
          <img src={item.img} alt={item.title} className="card-image" />
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

export default ShopItem;

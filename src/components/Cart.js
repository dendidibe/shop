import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ addedItems, total }) => {

  const addedItemList = addedItems.map(item => {
    return <CartItem item={item} key={item.id}/>;
  });

  return (
    <div className="container">
      <h3 className="center">Total: {total} $</h3>
      <div className="row">{addedItemList}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

export default connect(mapStateToProps)(Cart);

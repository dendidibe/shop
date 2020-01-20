import React from "react";
import { connect } from "react-redux";
import ShopItem from "./ShopItem";

const Shop = ({ items }) => {
  let itemList = items.map(item => {
    return <ShopItem item={item} key={item.id} />;
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
    items: state.items
  };
};
export default connect(mapStateToProps)(Shop);

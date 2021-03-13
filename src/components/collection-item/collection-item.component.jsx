import React from "react";

import Button from "../button/button.component";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="collection-item__image-box">
        <img src={imageUrl} alt="Product" className="collection-item__image" />
      </div>
      <Button onClick={() => addToCart(item) }>Add To cart</Button>
      <div className="collection-item__text-box">
        <h3 className="collection-item__name"> {name} </h3>
        <p className="collection-item__price"> {`$${price}`} </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);

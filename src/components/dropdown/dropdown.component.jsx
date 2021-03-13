import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import Button from "../button/button.component";

const Dropdown = ({ cartItems }) => {
  return (
    <div className="dropdown">
      {!(cartItems.length > 0) ? (
        <p className="dropdown__empty-message">No cart item !</p>
      ) : (
        <div className="dropdown__items">
          {cartItems.map((item) => (
            <div className="dropdown__item" key={item.id}>
              <img
                src={item.imageUrl}
                alt=""
                className="dropdown__item-image"
              />
              <p className="dropdown__item-name"> {item.name} </p>
              <p className="dropdown__item-quantity"> {`x${item.quantity}`} </p>
            </div>
          ))}
          <div className="checkout-box">
            <Button variant="primary" onClick={() => alert("checkout")}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Dropdown);

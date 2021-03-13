import React from "react";
import CustomHeader from "../../components/custom-header/custom-header.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  getTotalPrice,
} from "../../redux/cart/cart.selectors";

import {
  addToCart,
  removeFromCart,
  clearFromCart,
} from "../../redux/cart/cart.actions";

import { MdClose } from "react-icons/md";

const ChecoutPage = ({
  cartItems,
  totalPrice,
  addToCart,
  removeFromCart,
  clearFromCart,
}) => {
  return (
    <div className="checkout-page">
      <CustomHeader withBlackLink={true} />
      <main className="main">
        <div className="wrapper">
          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <img
                src={item.imageUrl}
                alt="Cart item"
                className="checkout-item__image"
              />
              <div className="checkout-item__quantity-box">
                <button className="btn" onClick={() => removeFromCart(item)}>
                  -
                </button>
                <span className="checkout-item__quantity">
                  {" "}
                  {item.quantity}{" "}
                </span>
                <button className="btn" onClick={() => addToCart(item)}>
                  {" "}
                  +{" "}
                </button>
              </div>
              <MdClose
                onClick={() => clearFromCart(item)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
          <h3 style={{ marginTop: "1.5rem" }}>
            {`Total price is: $${totalPrice}`}
          </h3>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: getTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  clearFromCart: (item) => dispatch(clearFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChecoutPage);

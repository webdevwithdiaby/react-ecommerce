import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const Dropdown = ({ cartItems }) => {
  return (
    <div className="dropdown">
      {!(cartItems.length > 0) ? (
        <p className="dropdown__empty-message">No cart item !</p>
      ) : (
        <div className="dropdown__items">items list</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Dropdown);

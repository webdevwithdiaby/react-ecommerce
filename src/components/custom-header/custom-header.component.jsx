import React, { useState } from "react";
import { MdMenu, MdShoppingCart, MdClose } from "react-icons/md";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import Dropdown from "../dropdown/dropdown.component";

const CustomHeader = ({ history, withBlackLink, cartItemsCount }) => {
  const [isNavShown, setIsNavShown] = useState(false);

  const handleNavVisibility = () => {
    setIsNavShown((prev) => !prev);
  };
  return (
    <header className="header">
      <div
        className={`header__backdrop ${
          isNavShown ? "showBackdrop" : "hideBackdrop"
        } `}
        onClick={handleNavVisibility}
      ></div>
      <div className="wrapper">
        <MdMenu className="header__menu" onClick={handleNavVisibility} />
        <h1 className="header__brand" onClick={() => history.push("/")}>
          {" "}
          ShapShap{" "}
        </h1>
        <div className={`header__nav  ${isNavShown ? "show" : "hidden"} `}>
          <div className="header__nav-container">
            <h1 className="header__nav-brand" onClick={() => history.push("/")}>
              {" "}
              ShapShap{" "}
            </h1>
            <MdClose className="header__close" onClick={handleNavVisibility} />
          </div>
          <div
            className={`header__link ${withBlackLink ? "blackLink" : null}`}
            onClick={() => history.push("/shop")}
          >
            Shop
          </div>
          <div
            className={`header__link ${withBlackLink ? "blackLink" : null}`}
            onClick={() => history.push("/contact")}
          >
            Contact
          </div>
          <div
            className={`header__link ${withBlackLink ? "blackLink" : null}`}
            onClick={() => history.push("/signin")}
          >
            Sign in
          </div>
        </div>
        <div className="header__cart-box">
          <MdShoppingCart className="header__cart" />
          <span> {`(${cartItemsCount})`} </span>
          <Dropdown />
        </div>
        
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps)(CustomHeader));

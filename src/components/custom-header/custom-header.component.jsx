import React, { useState } from "react";
import { MdMenu, MdShoppingCart, MdClose } from "react-icons/md";
import { withRouter } from "react-router-dom";

const CustomHeader = ({ history, withBlackLink }) => {
  const [isNavShown, setIsNavShown] = useState(false);

  const handleNavVisibility = () => {
    console.log("nav visibility trigerred ");
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
        <MdShoppingCart className="header__cart" />
      </div>
    </header>
  );
};

export default withRouter(CustomHeader);

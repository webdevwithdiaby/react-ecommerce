import React, { useState } from "react";

import { MdMenu, MdShoppingCart, MdClose } from "react-icons/md";

const Header = () => {
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
        <h1 className="header__brand"> Ecommerce </h1>
        <div className={`header__nav  ${isNavShown ? "show" : "hidden"} `}>
          <div className="header__nav-container">
            <h1 className="header__nav-brand"> Ecommerce </h1>
            <MdClose className="header__close" onClick={handleNavVisibility} />
          </div>
          <div className="header__link">Shop</div>
          <div className="header__link">Contact</div>
          <div className="header__link header__signin">Sign in</div>
        </div>
        <MdShoppingCart className="header__cart" />
      </div>
    </header>
  );
};

export default Header;

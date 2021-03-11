import React, { useState } from "react";

import { MdMenu, MdShoppingCart, MdClose } from "react-icons/md";

import hero from "../../assets/hero.jpg";

const Header = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const handleNavVisibility = () => {
    console.log("nav visibility trigerred ");
    setIsNavShown((prev) => !prev);
  };

  return (
    <header className="header" style={{ backgroundImage: `url(${hero})` }}>
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
      <div className="header__hero-box">
        <p className="header__hero-box-text1">Don't miss</p>
        <h2 className="header__hero-box-text2"> Mystery Deals </h2>
        <p className="header__hero-box-text3"> Online only </p>
        <button className="header__hero-box-btn"> DISCOVER NOW </button>
      </div>
    </header>
  );
};

export default Header;

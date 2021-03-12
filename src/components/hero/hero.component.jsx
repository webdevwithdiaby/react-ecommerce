import React from "react";

import hero from "../../assets/hero.jpg";

import CustomHeader from "../custom-header/custom-header.component";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <CustomHeader colorScheme="white" />
      <div className="hero-box">
        <p className="hero-box-text1">Don't miss</p>
        <h2 className="hero-box-text2"> Mystery Deals </h2>
        <p className="hero-box-text3"> Online only </p>
        <button className="hero-box-btn"> DISCOVER NOW </button>
      </div>
    </div>
  );
};

export default Hero;

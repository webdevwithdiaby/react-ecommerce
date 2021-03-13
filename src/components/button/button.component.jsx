import React from "react";

const Button = ({ children, variant, ...restProps }) => {
 
  return (
    <button className={`btn btn__${variant} `} {...restProps} >
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;

import React from "react";
import Button from "../button/button.component";

const Category = ({ id, title, imageUrl }) => {
  return (
    <div className="category">
      <img src={imageUrl} alt="Category Item" className="category__image" />
      <div className="category__text-box">
        <p className="category__title"> {title} </p>
        <Button variant='primary' >
          {" "}
          SHOP NOW{" "}
        </Button>
      </div>
    </div>
  );
};

export default Category;

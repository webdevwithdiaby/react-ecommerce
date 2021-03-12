import React from "react";

const Category = ({ id, title, imageUrl }) => {
  return <div className="category"> 
    <img src={imageUrl} alt="Category Item" className="category__image"/>
   </div>;
};

export default Category;

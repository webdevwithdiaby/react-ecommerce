import React from "react";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <img src={imageUrl} alt="Product" className="collection-item__image" />
      <div className="collection-item__text-box">
        <h3 className="collection-item__name"> {name} </h3>
        <p className="collection-item__price"> {`$${price}`} </p>
      </div>
    </div>
  );
};

export default CollectionItem;

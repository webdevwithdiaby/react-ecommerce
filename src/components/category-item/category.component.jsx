import React from "react";
import Button from "../button/button.component";
import {useHistory} from 'react-router-dom';

const Category = ({ id, title, imageUrl, routeName }) => {
  const history = useHistory();
  return (
    <div className="category">
      <img src={imageUrl} alt="Category Item" className="category__image" />
      <div className="category__text-box">
        <p className="category__title"> {title} </p>
        <Button variant="primary" onClick={() => history.push(`/shop/${routeName}`) }>
          {" "}
          SHOP NOW{" "}
        </Button>
      </div>
    </div>
  );
};

export default Category;

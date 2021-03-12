import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategoriesForDisplay } from "../../redux/category/category.selectors";

import CategoryItem from "../category-item/category.component";

const CategoryList = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <h2 className="category-list__title">Our categories</h2>
      <div className="category-list__container">
        {categories.map((cat) => (
          <CategoryItem key={cat.id} {...cat} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesForDisplay,
});

export default connect(mapStateToProps)(CategoryList);

import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategoriesForDisplay } from "../../redux/category/category.selectors";

const CategoryList = ({ categories }) => {
  console.log(categories);
  return <div>CATEGORY LIST</div>;
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesForDisplay,
});

export default connect(mapStateToProps)(CategoryList);

import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categoryReducer;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.categories
);

export const selectCategoriesForDisplay = createSelector(
  [selectCategories],
  (categories) => Object.keys(categories).map((key) => categories[key])
);

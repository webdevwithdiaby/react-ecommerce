import data from "./category.data";

const INITIAL_DATA = {
  categories: data,
};

const categoryReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoryReducer;

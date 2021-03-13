import { combineReducers } from "redux";
import categoryReducer from "./category/category.reducer";
import collectionReducer from "./collection/collection.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  categoryReducer,
  collectionReducer,
  cartReducer,
});

export default rootReducer;

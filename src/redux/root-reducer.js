import { combineReducers } from "redux";
import categoryReducer from "./category/category.reducer";
import collectionReducer from "./collection/collection.reducer";
import cartReducer from "./cart/cart.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};

const rootReducer = combineReducers({
  categoryReducer,
  collectionReducer,
  cartReducer,
});

export default persistReducer(config, rootReducer);

import { CartctionsTypes } from "./cart.types";
import { addToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartctionsTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

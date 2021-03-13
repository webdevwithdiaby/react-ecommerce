import { CartctionsTypes } from "./cart.types";
import { addToCart, removeFromCart } from "./cart.utils";

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
    case CartctionsTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };
    case CartctionsTypes.CLEAR_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (ittem) => ittem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;

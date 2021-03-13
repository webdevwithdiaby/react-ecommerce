import { CartctionsTypes } from "./cart.types";

export const addToCart = (item) => ({
  type: CartctionsTypes.ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: CartctionsTypes.REMOVE_FROM_CART,
  payload: item,
});

export const clearFromCart = (item) => ({
  type: CartctionsTypes.CLEAR_FROM_CART,
  payload: item,
});

import { CartctionsTypes } from "./cart.types"

export const addToCart = item => ({
    type: CartctionsTypes.ADD_TO_CART,
    payload: item
})
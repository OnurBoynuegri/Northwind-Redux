import * as actionTypes from "./actionTypes";

export function addToCart(cartItems) {
  return { type: actionTypes.ADD_TO_CART, payload: cartItems };
}

export function removeFromCart(product) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}

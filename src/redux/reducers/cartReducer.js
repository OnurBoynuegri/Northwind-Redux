import { act } from "react-dom/test-utils";
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      console.log("added", addedItem);
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          console.log("cartItem", cartItem);
          return cartItem; //buradaki return map'le gezilen her ürünü gezip listeye hepsini ekler ve en son dizi olarak newState referansına atar.
        });
        console.log("newState", newState);
        return newState;
      } else {
        return [...state, { ...action.payload }]; //[state'in bir kopyasını alır {ve action ile gelen payload'ı ekler}]
      }
    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return newState2;
    default:
      return state;
  }
}

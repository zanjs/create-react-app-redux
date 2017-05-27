export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  };
}

export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    index
  };
}

export function removeAllFromCart() {
  return {
    type: REMOVE_ALL_FROM_CART
  };
}

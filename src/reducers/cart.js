import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from '../actions';

const initialState = {
  items: []
};

export default function cart(state = initialState, payload) {
  switch(payload.type) {
    case ADD_TO_CART:
      return {
        items:[...state.items, payload.item]
      };

    case REMOVE_FROM_CART:
      return {
        items: [
          ...state.items.slice(0, payload.index),
          ...state.items.slice(payload.index + 1)
        ]
      };

    case REMOVE_ALL_FROM_CART:
      return initialState;

    default:
      return state;
  }
}

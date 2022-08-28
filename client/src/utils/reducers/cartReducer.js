import { UPDATE_CART_ITEMS, SET_IS_CART_OPEN } from '../actions/cartActions';

// cart REDUCER function
// Reducer accepts state and an action, returns a new state
export default function cartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of${type} in cartReducer`);
  }
}

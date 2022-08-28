import React, { createContext, useReducer } from 'react';
// ACTIONS
import { UPDATE_CART_ITEMS, SET_IS_CART_OPEN } from '../actions/cartActions';
// REDUCER
import cartReducer from '../reducers/cartReducer';

// Helper Functions
// Increase item qunatity
const increaseItemQty = (cartItems, productToAdd) => {
  // check if current cartItems contains the product to add
  const exsistingCartItem = cartItems.find(
    // compare each cartItem's id to product to add's id
    // return true or false
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, return new array of cartItems
  if (exsistingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } // if true, return new cart item and increment quantity
        : cartItem
    );
  }
  // return new array with modified cart items/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseItemQty = (cartItems, cartItemToRemove) => {
  // find existing cart item to remove
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // check if qty is equal to 1, if true remove item from cart
  if (exsistingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // else, return back cartItems with matching cart item with reduced qty
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// initialize new context for cart
// create custom hook to provide immediate usage of cart context value for other components to use
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartItem: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

// PROVIDER responsible for creating and updating STATE, and persisting values to the children
export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  // function to update cart reducer
  const updateCartItemsReducer = (newCartItems) => {
    // generate newCartTotal
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    // generate newCartCount
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    // dispatch new action with payload of {newCartItems, newCartTotal, newCartCount }
    dispatch({
      type: UPDATE_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  // create ACTION functions
  // add an item to cart
  const addItemToCart = (productToAdd) => {
    const newCartItems = increaseItemQty(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeCartItem = (cartItemToRemove) => {
    const newCartItems = decreaseItemQty(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: SET_IS_CART_OPEN, payload: bool });
  };

  // CONTEXT value
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeCartItem,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return (
    // The value prop expects an initial state object
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
    // render children in the component so that any descendant can access the value from the provider
  );
};

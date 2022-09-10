import React, { useContext } from 'react';
import { CartContext } from '../utils/context/cartContext';
import { Link } from 'react-router-dom';
import CheckoutItem from '../components/Cart-Items/CheckoutItem';
import Checkout from '../pages/Checkout';
import '../components/Cart-Items/checkout-styles.css';

// TO-DO: add cart items to local storage to persist data on page refresh
const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='wrapper bg-base-200 py-12'>
      <div className='checkoutContainer text-primary bg-white px-7 py-4 rounded-2xl'>
        <h2 className='pb-5 text-lg font-bold'>Shopping Cart</h2>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>PRODUCT</span>
          </div>
          <div className='header-block'>
            <span>TITLE</span>
          </div>
          <div className='header-block'>
            <span>DESCRIPTION</span>
          </div>
          <div className='header-block'>
            <span>QUANTITY</span>
          </div>
          <div className='header-block'>
            <span>PRICE</span>
          </div>
          <div className='header-block'>
            <span>REMOVE</span>
          </div>
        </div>
        {cartItems.length === 0 && (
          <p className='pt-7 font-semibold'>No Items Currently in Your Cart</p>
        )}

        {cartItems.map((cartItem) => {
          // const { id, title, desc, price, quantity, imageURL } = cartItem;
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}

        <span className='total font-bold'>Total: ${cartTotal}</span>
        <Link to='/Checkout' element={Checkout}>
          <button className='btn btn-primary text-white'>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

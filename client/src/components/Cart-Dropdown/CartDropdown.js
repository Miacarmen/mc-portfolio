import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';

import CartItem from '../Cart-Items/CartItem';
import './cart-styles.css';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const routeToCart = () => {
    navigate('/cart');
  }

  return (
    <div className='cart-container menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-64'>
      <div className='cart-items p-2'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <div className='mt-5 ml-14'>
          <button className='btn btn-primary' onClick={routeToCart}>View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;

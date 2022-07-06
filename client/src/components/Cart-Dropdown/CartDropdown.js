import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';

import CartItem from '../Cart-Items/CartItem';
import './cart-styles.css';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-container menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52'>
      <div className='cart-items '>
        {cartItems.map((item) => 
          <CartItem key={item.id} cartItem={item} />
        )}
        <div className='mt-auto ml-10'>
        <Link to='/cart'>
          <button className='btn btn-primary '>View Cart</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;

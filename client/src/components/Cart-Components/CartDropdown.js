import React from 'react';
import { Link } from 'react-router-dom';

import './cart-styles.css';

const CartDropdown = () => {
  return (
    <div className='cart-container shadow bg-base-100 rounded-box w-52'>
      <div className='cart-items '>
        <ul>
          <li>item</li>
          <li>item2</li>
        </ul>
        <div className='mt-auto ml-11'>
        <Link to='/cart'>
          <button className='btn btn-primary '>View Cart</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;

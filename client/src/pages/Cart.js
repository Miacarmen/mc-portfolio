import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';

import CheckoutItem from '../components/Cart-Items/CheckoutItem';
import '../components/Cart-Items/checkout-styles.css';
import { FaTrashAlt } from 'react-icons/fa';

// TO-DO: onClick of btn, prompt to add shipping and payment
// TO-DO: sweet alert on payment completion
const Cart = () => {
  const { cartItems, addItemToCart, removeCartItem } = useContext(CartContext);

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
        {cartItems.length === 0 && <p className='pt-5'>No Items Currently in Your Cart</p>}
      
          {cartItems.map((cartItem) => {
            // const { id, title, desc, price, quantity, imageURL } = cartItem;
            return (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
              // <div key={id}>
              //   <div className='imgContainer'>
              //   <img className='checkoutImg' src={imageURL} alt={`${title}`} />
              //   </div>
              //   <div className='details'>
              //   <span className=''>{title}</span>
              //   <span className='flex '>{desc}</span>
              //   <span className='flex '>${price}</span>
              //   <span className='flex  text-lg'>
              //     <span
              //       className='cursor-pointer font-bold pr-2'
              //       onClick={() => removeCartItem(cartItem)}
              //     >
              //       -
              //     </span>
              //     {quantity}
              //     <span
              //       className='cursor-pointer font-bold pl-2'
              //       onClick={() => addItemToCart(cartItem)}
              //     >
              //       +
              //     </span>
              //   </span>
              //   </div>
              //   <button className='btn btn-primary btn-sm'>Remove </button>
              // </div>
            );
          })}

<span className='total'>Total: 0</span>
          <button className='btn btn-primary text-white'>
            Checkout
          </button>
        </div>

          
        </div>
    
  
  );
};

export default Cart;

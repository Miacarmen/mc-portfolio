import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';

// TO-DO: onClick of btn, prompt to add shipping and payment
// TO-DO: sweet alert on payment completion
const Cart = () => {
  const { cartItems, addItemToCart, removeCartItem } = useContext(CartContext);

  return (
    <div className='wrapper bg-base-200 py-12'>
      <div className='container max-w-screen-lg mx-auto pb-10 text-primary bg-white px-7 py-4 rounded-2xl'>
        <h2 className='pb-5 text-lg font-bold'>Shopping Cart</h2>

        <p>No Items Currently in Your Cart</p>
        <div className='cartInfo grid grid-cols-1 md:grid-cols-3'>
          {cartItems.map((cartItem) => {
            const { id, title, desc, price, quantity, imageURL } = cartItem;
            return (
              <div key={id}>
                <img src={imageURL} alt={`${title}`} />
                <span className=''>{title}</span>
                <span className='flex justify-center'>{desc}</span>
                <span className='flex md:justify-end'>${price}</span>
                <span className='flex md:justify-end text-lg'>
                  <span className='cursor-pointer font-bold pr-2' onClick={() => removeCartItem(cartItem)}>-</span>
                  {quantity}
                  <span
                    className='cursor-pointer font-bold pl-2'
                    onClick={() => addItemToCart(cartItem)}
                  >
                    +
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        <div className='controls mt-7 flex justify-end'>
          <p className='mr-4'>Cart Total</p>
          <button className='btn btn-sm btn-primary text-base-100'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

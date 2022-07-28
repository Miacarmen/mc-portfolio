import React, { useContext } from 'react';
import { CartContext } from '../../utils/context/cartContext';
import './checkout-styles.css';

const CheckoutItem = ({ cartItem }) => {
  const { title, desc, price, quantity, imageURL } = cartItem;

  const { clearItemFromCart, addItemToCart, removeCartItem } =
    useContext(CartContext);

  const clearItem = () => clearItemFromCart(cartItem);

  const increaseQty = () => addItemToCart(cartItem);
  const decreaseQty = () => removeCartItem(cartItem);

  return (
    <div className='checkoutItemContainer'>
      <div className='imgContainer'>
        <img src={imageURL} alt={`${title}`} />
      </div>
      <span className='title'>{title}</span>
      <span className='desc'>{desc}</span>
      <span className='quantity'>
        <div
          className='decrease cursor-pointer font-bold text-xl'
          onClick={decreaseQty}
        >
          -
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='increase cursor-pointer font-bold text-lg'
          onClick={increaseQty}
        >
          +
        </div>
      </span>

      <span className='price'>${price}</span>

      <div
        className='deleteBtn text-lg font-black cursor-pointer' title='Delete'
        onClick={clearItem}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

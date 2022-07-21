import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './navDropdown';
import CartIcon from '../Cart-Dropdown/CartIcon';
import CartDropdown from '../Cart-Dropdown/CartDropdown';
import './Navbar.css';
import image from '../../images/heart (8).png';

import { CartContext } from '../../context/cart.context';

const Nav = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className='navbar bg-primary'>
      <div className='navbar-start px-2 mx-2'>
        <span className='text-lg font-bold'>
          <img alt='logo' src={image} height='70px' width='70px'></img>
        </span>
      </div>

      <div className='navbar-end flex-1 px-2 '>
        <div className='pr-2'>
          <Dropdown />
        </div>
        <div className='hidden md:flex items-stretch space-x-3 font-medium '>
          <Link to='/' className='hover:text-primary-focus'>
            Home
          </Link>
          <Link to='/about' className='hover:text-primary-focus'>
            About
          </Link>
          <Link to='/contact' className='hover:text-primary-focus'>
            Contact
          </Link>
          <div className='cartIcon badge badge-primary'>
            <CartIcon />
          </div>

          {isCartOpen && <CartDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Nav;

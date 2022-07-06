import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-daisyui';

import Dropdown from './navDropdown';
import CartIcon from '../Cart-Components/CartIcon';
import CartDropdown from '../Cart-Components/CartDropdown';
import './Navbar.css';
import image from '../../images/heart (8).png';

import { CartContext } from '../../context/cart.context';

const Nav = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <Navbar className='navbar bg-primary'>
      <Navbar.Start className='px-2 mx-2'>
        <span className='text-lg font-bold'>
          <img alt='logo' src={image} height='70px' width='70px'></img>
        </span>
      </Navbar.Start>

      <Navbar.End className='flex-1 px-2 mx-2'>
        <Dropdown />

        <div className='hidden md:flex items-stretch space-x-3 font-medium'>
          <Link to='/' className='hover:text-primary-focus'>
            Home
          </Link>
          <Link to='/about' className='hover:text-primary-focus'>
            About
          </Link>
          <Link to='/contact' className='hover:text-primary-focus'>
            Contact
          </Link>

          {/* <Link to='/cart' className='hover:text-primary-focus'> */}
            <div class='badge badge-primary'>
              <CartIcon />
            </div>
          {/* </Link> */}
         {isCartOpen && <CartDropdown />}
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;

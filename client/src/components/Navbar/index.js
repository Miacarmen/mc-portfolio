import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-daisyui';
import Dropdown from './navDropdown';
import './Navbar.css';
import image from '../../images/heart (8).png';
import { BiShoppingBag } from 'react-icons/bi';

// * TO-DO: change active link color

const Nav = () => {

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

          <Link to='/cart' className='hover:text-primary-focus'>
            <div class='badge badge-primary'>
              <BiShoppingBag size={20} />0
            </div>
          </Link>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;

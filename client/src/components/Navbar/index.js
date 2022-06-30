import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-daisyui';
import image from '../../images/heart (8).png';
import '../../styles/Navbar.css';
import { BiShoppingBag } from 'react-icons/bi';

// * TO-DO: change active link color

const Nav = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  return (
    <Navbar className='navbar bg-primary'>
      <Navbar.Start className='px-2 mx-2'>
        <span className='text-lg font-bold'>
          <img alt='logo' src={image} height='70px' width='70px'></img>
        </span>
      </Navbar.Start>

      <Navbar.End className='flex-1 px-2 mx-2'>
        <div className='dropdown dropdown-left'>
          <label
            tabindex='0'
            className='dropMenu btn btn-ghost btn-circle'
            onClick={() => setExpandMenu(!expandMenu)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabindex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/' className='hover:text-primary-focus'>Home</Link>
            </li>
            <li>
              <Link to='/portfolio' className='hover:text-primary-focus'>Portfolio</Link>
            </li>
            <li>
              <Link to='/resume' className='hover:text-primary-focus'>Resume</Link>
            </li>
            <li>
              <Link to='/shop' className='hover:text-primary-focus'>Shop</Link>
            </li>
            <li>
              <Link to='about' className='hover:text-primary-focus'>About</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-primary-focus'>Contact</Link>
            </li>
            <li>
              <Link to='/cart' className='hover:text-primary-focus'>Cart</Link>
            </li>
          </ul>
        </div>

        <div className='hidden md:flex items-stretch space-x-3 font-medium'>
          <Link to='/' className='hover:text-primary-focus'>Home</Link>
          <Link to='/about' className='hover:text-primary-focus'>About</Link>
          <Link to='/contact' className='hover:text-primary-focus'>Contact</Link>

          <Link to='/cart' className='hover:text-primary-focus'>
            
            <div class="badge badge-primary"><BiShoppingBag size={20} />0</div>
          </Link>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default Nav;

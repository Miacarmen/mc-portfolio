import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavDropdown = () => {
    const [expandMenu, setExpandMenu] = useState(false);
  return (
    <div className='dropdown dropdown-left'>
          <label
            tabIndex='0'
            className='dropMenu btn btn-ghost btn-circle'
            onClick={() => setExpandMenu(!expandMenu)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/' className='hover:text-primary-focus'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/portfolio' className='hover:text-primary-focus'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='/resume' className='hover:text-primary-focus'>
                Resume
              </Link>
            </li>
            <li>
              <Link to='/shop' className='hover:text-primary-focus'>
                Shop
              </Link>
            </li>
            <li>
              <Link to='about' className='hover:text-primary-focus'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-primary-focus'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/cart' className='hover:text-primary-focus'>
                Cart
              </Link>
            </li>
          </ul>
        </div>
  )
}

export default NavDropdown;
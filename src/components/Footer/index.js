import React from 'react';
import { Link } from 'react-router-dom';
import image2 from '../../images/heart (9).png';
import icon1 from '../../images/github.png';
import icon2 from '../../images/linkedin.png';
import icon3 from '../../images/instagram.png';

const Foot = () => {
  return (
    <div>
      <footer className='footer p-10 bg-base-100 text-base-content justify-items-center'>
        <div>
          <span className='footer-title'>Services</span>
          <p>Web Development</p>
          <p>Graphic Design</p>
          <p>Illustration</p>
          <p>Branding</p>
        </div>
        <div>
          <span className='footer-title'>Company</span>
          <Link to='/' className='hover:text-primary-focus'>Home</Link>
          <Link to='/about' className='hover:text-primary-focus'>About</Link>
          <Link to='/resume' className='hover:text-primary-focus'>Resume</Link>
          <Link to='/portfolio' className='hover:text-primary-focus'>Portfolio</Link>
          <Link to='/shop' className='hover:text-primary-focus'>Shop</Link>
          <Link to='/contact' className='hover:text-primary-focus'>Contact</Link>
        </div>

        <div>
          <span className='footer-title'>Legal</span>
          <p className='link link-hover hover:text-primary-focus'>Terms of use</p>
          <p className='link link-hover hover:text-primary-focus'>Privacy policy</p>
          <p className='link link-hover hover:text-primary-focus'>Cookie policy</p>
        </div>
      </footer>
      <footer className='footer flex grid grid-cols-3 px-10 pt-2 pb-2 bg-base-100 text-base-content border-base-300'>
        <div className='place-self-center grid-flow-col'>
          <p>Copyright © 2022 - Made With Sugar, Spice & Everything Nice</p>
        </div>
        <div className='justify-self-center'>
          <img alt='logo' src={image2} height='70px' width='70px'></img>
        </div>
        <div className='md:place-self-center md:justify-self-end'>
          <div className='grid grid-flow-col gap-4'>
            <img alt='github' src={icon1} height='30px' width='30px'></img>
            <img alt='linkedin' src={icon2} height='30px' width='30px'></img>
            <img alt='instagram' src={icon3} height='30px' width='30px'></img>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;

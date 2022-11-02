import React from 'react';
import { Link } from 'react-router-dom';
import image2 from '../../images/heart-bottom.png';
import icon1 from '../../images/github.png';
import icon2 from '../../images/linkedin.png';
import icon3 from '../../images/instagram.png';

const Foot = () => {
  return (
    <div>
      <footer className='footer p-10 bg-base-100 text-base-content align-center justify-items-center'>
        <div className='pl-3'>
          <span className='footer-title'>Services</span>
          <p>Web Development</p>
          <p>Graphic Design</p>
          <p>Illustration</p>
          <p>Branding</p>
        </div>
        <div className='pr-8'>
          <span className='footer-title'>Company</span>
          <Link to='/' className='hover:text-primary-focus'>
            Home
          </Link>
          <Link to='/about' className='hover:text-primary-focus'>
            About
          </Link>
          <Link to='/resume' className='hover:text-primary-focus'>
            Resume
          </Link>
          <Link to='/portfolio' className='hover:text-primary-focus'>
            Portfolio
          </Link>
          <Link to='/shop' className='hover:text-primary-focus'>
            Shop
          </Link>
          <Link to='/contact' className='hover:text-primary-focus'>
            Contact
          </Link>
        </div>

        <div className='mr-5'>
          <span className='footer-title'>Legal</span>
          <Link to='/termsofuse'>
            <p className='link link-hover hover:text-primary-focus'>
              Terms of use
            </p>
          </Link>
          <Link to='/privacypolicy'>
            <p className='link link-hover hover:text-primary-focus'>
              Privacy policy
            </p>
          </Link>
          <Link to='/cookiepolicy'>
            <p className='link link-hover hover:text-primary-focus'>
              Cookie policy
            </p>
          </Link>
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
          <div className='socialIcons grid grid-flow-col gap-4'>
            <a href='https://github.com/Miacarmen'>
              <img
                id='socialIcon'
                alt='github'
                src={icon1}
                height='30px'
                width='30px'
              ></img>
            </a>
            <a href='https://www.linkedin.com/in/mia-carmen-7750a6b8/'>
              <img
                id='socialIcon'
                alt='linkedin'
                src={icon2}
                height='30px'
                width='30px'
              ></img>
            </a>
            <a href='https://www.instagram.com/thedevilsdisko/'>
              <img
                id='socialIcon'
                alt='instagram'
                src={icon3}
                height='30px'
                width='30px'
              ></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;

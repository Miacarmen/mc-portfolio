import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import '../../App.css';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className='scrollBtn hover:text-primary-focus' >
      <FaHeart
        className='scrollTop'
        onClick={scrollTop}
        style={{ height: 50, display: showScroll ? 'flex' : 'none' }}
      />
      <FaChevronUp
        className='text-base-100' id='upArrow'
        onClick={scrollTop}
        style={{ height: 25, display: showScroll ? 'flex' : 'none' }}
      />
    </div>
  );
};

export default ScrollArrow;

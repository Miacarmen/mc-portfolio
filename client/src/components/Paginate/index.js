import React from 'react'
import { Link } from 'react-router-dom';
// import Portfolio from '../../pages/Portfolio';
// import Designs from '../../pages/Designs';

const Paginate = () => {
  return (
    <div>
        <div class='flex justify-center btn-group mt-8'>
          <Link to='/portfolio'>
            <button class='btn btn-base btn-active'>1</button>
          </Link>
          <Link to='/designs'>
            <button class='btn btn-base'>2</button>
          </Link>
          {/* <button class='btn btn-base' disabled>3</button> */}
        </div>
    </div>
  )
}

export default Paginate;
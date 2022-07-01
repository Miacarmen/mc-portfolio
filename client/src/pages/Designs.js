import React from 'react';
import { Card } from 'react-daisyui';
import Paginate from '../components/Paginate';

const Designs = () => {
  return (
    <div className='wrapper bg-base-200'>
      <div className='container max-w-screen-lg mx-auto pb-10 text-primary'>
        <h1 className='pt-5 text-3xl font-bold text-base-300 text-center'>
          Graphic Design
        </h1>
        <Card>
          <h1 className='mt-7 font-bold text-2xl'>Project Title</h1>
          <p>Company Name</p>
          <p>Image</p>
        </Card>

        <Paginate />
      </div>
    </div>
  );
};

export default Designs;

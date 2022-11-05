import React from 'react';
import { Card, Button } from 'react-daisyui';

const Resume = () => {
  return (
    <div className='wrapper flex justify-center items-center bg-base-200'>
      <div className='container max-w-screen-lg mx-auto pb-12'>
        <Card className='card bg-base-100 shadow-xl text-center mb-5'>
          <div className='card-body'>
            <h2 className='font-semibold text-xl'>
              View and Download My Resume
            </h2>
            <div className='card-actions justify-center'>
              <Button className='btn btn-primary '>
                <a
                  href='../images/Mia-Carmen-Developer-and-Designer.png'
                  download='Mia-Carmen_Web_Developer.png'
                >
                  Download
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resume;

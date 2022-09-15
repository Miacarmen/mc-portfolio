import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { Card, Button } from 'react-daisyui';
import './CheckoutForm.styles.css';

// TO-DO: sweet alert on payment completion

const CheckoutForm = () => {
  return (
    <div className='wrapper flex justify-center items-center bg-base-200'>
      <div className='container max-w-screen-lg mx-auto pb-24'>
        <Card className='bg-base-100' id='checkoutContainer'>
          <Card.Title tag='h2' className='pb-12'>
            Checkout
          </Card.Title>
          <form id='paymentForm'>
            <CardElement id='cardEl' />
            <Card.Actions className='justify-center pt-8'>
              <Button className='btn-sm btn-primary text-white'>Submit</Button>
            </Card.Actions>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutForm;

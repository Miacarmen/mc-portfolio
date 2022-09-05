import React from 'react';
import { PaymentElement, CardElement } from '@stripe/react-stripe-js';
import { Card, Button } from 'react-daisyui';
import Styles from './CheckoutForm.styles.css';

const CheckoutForm = () => {
  return (
    <div className='wrapper flex justify-center items-center bg-base-200'>
      <div className='container max-w-screen-lg mx-auto pb-24'>
        <Card className='checkoutContainer bg-base-100'>
          <Card.Title tag='h2' className='pb-12'>
            Checkout
          </Card.Title>
          <form className='paymentForm'>
            <CardElement />
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

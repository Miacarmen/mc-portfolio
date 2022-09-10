import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe';

import './index.css';

import App from './App';
import { ProductsProvider } from './utils/context/productsContext';
import { CartProvider } from './utils/context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* provides context for product data */}
    <ProductsProvider>
      {/* provides context for cart data */}
      <CartProvider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </CartProvider>
    </ProductsProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { ProductsProvider } from './utils/context/productsContext';
import { CartProvider } from './utils/context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provides context for product data */}
    <ProductsProvider>
      {/* provides context for cart data */}
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);

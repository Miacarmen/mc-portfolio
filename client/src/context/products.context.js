import { createContext, useState } from "react";

import PRODUCTS from '../productData.json';

// the value you want to access
export const ProductsContext = createContext({
    products: [], 
});

// the component you want
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    
const value = {products};

    return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}
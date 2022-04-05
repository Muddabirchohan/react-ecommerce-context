import React, { createContext, useEffect, useState } from 'react';
// import {shop} from '../shop-data/shop-data';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [products,setProducts] = useState([]);

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
},[])

console.log("pro",products)
  return (
    <ProductsContext.Provider value={{ products }}>
      { children }
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
import React, { createContext, useEffect, useState } from 'react';
// import {shop} from '../shop-data/shop-data';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [error,setError] = useState({});


useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
            .catch(err => setError(err))
},[])

  return (
    <ProductsContext.Provider value={{ products }}>
      { children }
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
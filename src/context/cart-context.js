import React, { createContext, useReducer } from 'react';
import cartReducer, { sumItems } from './cart-reducer';

export const CartContext = createContext();

const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = payload => {
    dispatch({type: 'ADD_ITEM', payload});
    
  }
  const increase = payload => {
    dispatch({type: 'INCREASE', payload})
  }
  const decrease = payload => {
    dispatch({type: 'DECREASE', payload});
  }

  const removeProduct = payload => {
    dispatch({type: 'REMOVE_ITEM', payload})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR'});
  }
  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart
  }

  return (
    <CartContext.Provider value={contextValues}>
      { children }
    </CartContext.Provider>
  );
}

export default CartContextProvider;
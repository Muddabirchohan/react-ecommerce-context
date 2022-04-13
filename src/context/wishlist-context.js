import React, { createContext, useReducer } from 'react';
import wishlistReducer, { sumItems } from './wishlist-reducer';

export const WishlistContext = createContext();

const initialState = { wishlist: [] };

const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addProduct = payload => {
    dispatch({type: 'ADD_ITEM', payload});
    
  }

  const removeProduct = payload => {
    dispatch({type: 'REMOVE_ITEM', payload})
  }

  const clearWishlist = () => {
    dispatch({type: 'CLEAR'});
  }
  const contextValues = {
    ...state,
    addProduct,
    removeProduct,
    clearWishlist
  }

  return (
    <WishlistContext.Provider value={contextValues}>
      { children }
    </WishlistContext.Provider>
  );
}

export default WishlistContextProvider;
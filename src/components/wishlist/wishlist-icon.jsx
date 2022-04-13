import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
// import { CartContext } from '../../context/cart-context';
import shoppingBag from '../../assets/wishlist.png';

const Wishlisticon = ({ history }) => {
//   const { itemCount } = useContext(CartContext);
  return (
    <div className="" onClick={() => history.push('/wishlist')}>
      <img src={shoppingBag} alt='shopping-cart-icon' style={{width: "35px"}}/>
       
    </div>
  );
}

export default withRouter(Wishlisticon); 
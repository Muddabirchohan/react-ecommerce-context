import React, { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../layout';
import CartItem from './cart-item';
import Total from './total';
import { IproductsData } from '../../interfaces/product-interface';

import './cart-page.styles.scss';

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
  const cartFuncs = { increase, decrease, removeProduct };
  return (
    <Layout>
      <>
      <h1>Cart</h1>
      {
        cartItems.length === 0 
        ? 
        <div className='empty-cart'>Your cart is empty</div>
        :
        <> 
          <div className='cart-page'>
            <div className='cart-item-container'>

              {
                cartItems.map((item:IproductsData) => <CartItem {...item} key={item.id} page="cart" {...cartFuncs} />)
              }

            </div>
            
            <Total itemCount={itemCount} total={total} clearCart={clearCart} />

          </div>
        </>
      } 
      </>
    </Layout> 
  );
}

export default CartPage;
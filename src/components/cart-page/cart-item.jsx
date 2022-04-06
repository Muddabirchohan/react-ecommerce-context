import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from './../icons/index';

const CartItem = (product) => {
  const { title, image, price, quantity, increase, decrease, removeProduct } = product;
  return (
    <div className='cart-item'>
      <div className='item-image'>
        <img src={image} alt='product' />
      </div>
      <div className='name-price'>
        <h4>{title}</h4>
        <p>{`Price: ${price}`}</p>
      </div>
      <div className='quantity'>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className='btns-container'>
        <button 
          onClick={() => increase(product)}
          className='btn-increase'
        >
          <PlusCircleIcon width='20px' />
        </button>
        {
          quantity === 1 && 
          <button
            onClick={() => removeProduct(product)}
            className='btn-trash'
          >
            <TrashIcon width='20px' />
          </button>
        }
        { 
          quantity > 1 && 
          <button 
          onClick={() => decrease(product)}
          className='btn-decrease'
          >
            <MinusCircleIcon width='20px' />
          </button>
        }
         
      </div>
    </div>
  );
}

export default CartItem;
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { isInCart } from '../../helper';
import { CartContext } from '../../context/cart-context'; 
import './featured-product.styles.scss';

const FeaturedProduct = (props) => {
  const { title, image, price, id, description, history } = props;
  const product = { title, image, price, id, description }
  const { addProduct, cartItems, increase } = useContext(CartContext);
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
        <img src={image} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        {
          !isInCart(product, cartItems) && 
          <button 
            className='button is-black nomad-btn' 
            onClick={() => addProduct(product)}>
              ADD TO CART
          </button>
        }
        {
          isInCart(product, cartItems) && 
          <button 
            className="button is-white nomad-btn" 
            id='btn-white-outline' 
            onClick={() => increase(product)}>
              ADD MORE
          </button>
        }
        
      </div>
    </div>
  );
}

export default withRouter(FeaturedProduct);
import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductsContext } from '../../context/products-context';
import { CartContext } from '../../context/cart-context'; 
import Layout from '../layout';
import { isInCart } from '../../helper';

import './single-product.styles.scss';

const SingleProduct = ({ match, history }) => {
  const { push } = history;
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems,increase } = useContext(CartContext);
  const { id }= match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    
    if (!product) { 
      return push('/shop') 
    }

    setProduct(product);
  }, [product, push, id, products]);

  if (!product) { return null }
  const { image, title, price, description } = product;
  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img src={image} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div className='add-to-cart-btns'>
            {
              !isInCart(product, cartItems) && 
              <button 
                className="button is-white nomad-btn" 
                id='btn-white-outline' 
                onClick={() => addProduct(product)}
              >
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
            
            <button className="button is-black nomad-btn" id='buy-it-now-btn' onClick={() => history.push('/cart')}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className='product-description'>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(SingleProduct);
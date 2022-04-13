import React, { useContext } from 'react';
import Layout from '../../layout';
import FeaturedProduct from '../../shared/featured-product.tsx';
import { ProductsContext } from '../../../context/products-context';
import { IproductsData } from '../../../interfaces/product-interface';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts:IproductsData[] = products.map((product:IproductsData) => (
    <FeaturedProduct {...product} key={product.id} />
    ));
    
  return (
    <Layout>
      <div className='product-list-container'>
        <h2 className='product-list-title'>Shop</h2>
        <div className='products-list'>
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
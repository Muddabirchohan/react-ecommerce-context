import React, { useContext } from "react";
import Layout from "../../layout";
import './wishlist.styles.scss';
import { WishlistContext } from "../../../context/wishlist-context";
import WishlistItem from "../../wishlist/wishlist-item";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <Layout>
      <h1> Wishlist </h1>
        <div className='cart-page'>
            <div className='cart-item-container'>
            {
        wishlist.length === 0 
        ? 
        <div className='empty-cart'>Your Wishlist is empty</div>
        :
        wishlist.map((item) => (
          <WishlistItem {...item} />
        ))
        }
      </div>
      </div>
    </Layout>
  );
};

export default Wishlist;

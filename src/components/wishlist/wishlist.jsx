import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { WishlistContext } from "../../context/wishlist-context";
import wishlisticon from './../../assets/wishlist.png';


const WishList = (product) => {
  const {wishlist,addProduct} = useContext(WishlistContext);
  const wishlistFunc = { addProduct };

  return (
    <div className="" >
        <img src={wishlisticon} onClick={() => wishlistFunc.addProduct(product)} style={{width: "30px"}}/>
    </div>
  );
};

export default WishList;

import React, { useContext } from "react";

const WishlistItem = ({image,price,title}) => {
  return (
    <div className="wishlist-item">
      <div className="item-image">
        <img src={image} alt="product" style={{ width: 100 }} />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>{`Price: ${price}`}</p>
      </div>

    </div>
  );
};

export default WishlistItem;

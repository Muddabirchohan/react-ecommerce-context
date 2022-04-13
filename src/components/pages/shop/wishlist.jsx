import React, { useContext } from "react";
import Layout from "../../layout";
import './wishlist.styles.scss';
import { WishlistContext } from "../../../context/wishlist-context";
import WishlistItem from "../../wishlist/wishlist-item";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <Layout>
      <div className="wishlist-container">
        {wishlist.map((item) => (
          <WishlistItem {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default Wishlist;

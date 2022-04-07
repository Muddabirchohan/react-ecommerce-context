import React, { useContext } from "react";
import { CartContext } from "./../../context/cart-context";
import Layout from "./../layout";
import CartItem from "./../cart-page/cart-item";
import Total from "./../cart-page/total";

// import './cart-page.styles.scss';

const CheckoutPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const cartFuncs = { increase, decrease, removeProduct };
  return (
    <Layout>
      <>
        <h1>Checkout</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">No Items Please Refresh your cart</div>
        ) : (
          <>
            <div className="cart-page">
              <div className="cart-item-container">
                {cartItems.map((item) => (
                  <CartItem
                    {...item}
                    key={item.id}
                    page="checkout"
                    {...cartFuncs}
                  />
                ))}
              </div>

              <Total
                itemCount={itemCount}
                total={total}
                clearCart={clearCart}
                page="checkout"
              />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default CheckoutPage;

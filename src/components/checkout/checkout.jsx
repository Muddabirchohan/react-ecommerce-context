import React, { useContext } from "react";
import { CartContext } from "./../../context/cart-context";
import Layout from "./../layout";
import CartItem from "./../cart-page/cart-item";
import Total from "./../cart-page/total";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./checkout-form";

const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_qjSaCAS58mdBZAtgrPVXJoSV00W3kVOXiQ',
  };

  const stripePromise = loadStripe('pk_test_mBYHGStdYRK5CWYhWpg4My6B002QkWbZro');


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
      <Elements stripe={stripePromise} >
      {/* <CheckoutForm /> */}
    </Elements>
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

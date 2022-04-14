import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";
import WishlistContextProvider from "./context/wishlist-context";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <App />
        </WishlistContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

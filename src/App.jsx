import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import './App.scss';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop.tsx';
import singleProduct from './components/single-product/single-product';
import CartPage from './components/cart-page/cart-page.tsx';
import CheckoutPage from './components/checkout/checkout';
import Wishlist from './components/pages/shop/wishlist';
import Chat from './components/chat-room/chat';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={singleProduct} />
        <Route path='/cart' component={CartPage} /> 
        <Route path='/checkout' component={CheckoutPage} /> 
        <Route path='/wishlist' component={Wishlist} /> 
        <Route path='/chat' component={Chat} /> 

        <Route path="*" component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
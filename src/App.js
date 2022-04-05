import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page';
import './App.scss';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import singleProduct from './components/single-product/single-product';
import CartPage from './components/cart-page/cart-page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={singleProduct} />
        <Route path='/cart' component={CartPage} /> 

        <Route path="*" component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
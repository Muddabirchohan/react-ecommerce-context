import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import WishlistIcon from '../wishlist/wishlist-icon';
import './header.styles.scss';

const Header = () => {
  return (
    <nav className="nav-menu container">
      <div className='logo'>
        <Link to='/'>NOMAD</Link>
      </div>
      <ul className='links'>
        <li>
          <Link 
            to='/'
            className="" 
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/shop' 
            className=" " 
          >
            Shop
          </Link>
        </li>
      </ul>
      <CartIcon />
      <WishlistIcon />

    </nav>
  );
}

export default Header; 
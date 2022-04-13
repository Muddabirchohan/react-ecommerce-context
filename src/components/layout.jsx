import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import CookieConsent from './cookie-consent/cookie-consent';

const Layout = ({children}) => {
  return (
    <>
    
      <Header />
      <CookieConsent/>
        <main>
          {
            children
          }
        </main>
      <Footer />
    </>
  );
}

export default Layout;
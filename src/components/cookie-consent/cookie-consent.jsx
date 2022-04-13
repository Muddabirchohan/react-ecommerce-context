import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookieConsents = ({ history }) => {
  return (
    <div className="cart-container">
      <CookieConsent
      enableDeclineButton
        location="top"
        buttonText="Accept"
        cookieName="nomad-cookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        We use cookies and other technologies to improve the site, measure
        performance and analyze traffic and to offer various marketing services.
        If you click on "I accept cookies", you accept this use and the
        possibility for us to share information with our external partners. If
        you disable all cookies
      </CookieConsent>
    </div>
  );
};

export default withRouter(CookieConsents);

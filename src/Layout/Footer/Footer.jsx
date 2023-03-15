import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer_links disflex">
            <div className="footer_logo">
              <Link to="/">
                <div className="header__logo"></div>
              </Link>
              <h2 className="poppins f400">The New Creative Economy.</h2>
            </div>
            <div className="footer_popups">
              <div className="footer_item nav">
                <span className="h4 disflex acenter">
                  <h4 className="poppins f500 cht2">Crypter.</h4>
                  <b>&#11167;</b>
                </span>
                <ul>
                  <li>Discover</li>
                  <li>Connect wallet</li>
                  <li>Create item</li>
                </ul>
              </div>
              <div className="footer_item info">
                <span className="h4 disflex acenter">
                  <h4 className="poppins f500 cht2">Info</h4>
                  <b>&#11167;</b>
                </span>
                <ul>
                  <li>Download</li>
                  <li>Demos</li>
                  <li>Support</li>
                </ul>
              </div>
            </div>
            <div className="footer_item sub">
              <div className="ul">
                <h4 className="poppins f500 cht2">Join Newsletter</h4>
                <p className="poppins f400 cht2">
                  Subscribe our newsletter to get more free design course and
                  resource
                </p>
                <div className="footer_input">
                  <input type="email" placeholder="Enter your email" />
                  <b className="next"></b>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_foot disflex acenter">
            <small>Copyright © 2021 UI8 LLC. All rights reserved</small>
            <div className="disflex">
              <small>We use cookies for better service.</small>
              <span>Accept</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

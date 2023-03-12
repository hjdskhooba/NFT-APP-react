import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <Link to="/">
              <div className="header__logo"></div>
            </Link>
            <div className="header__line"></div>
            <div className="header__nav">
              <Link to="/">
                <p>Discover</p>
              </Link>
              <Link to="/faq">
                <p>How it work</p>
              </Link>
            </div>
          </div>
          <div className="header__right">
            <div className="header__search__block">
              <input
                placeholder="Search"
                className="header__search"
                type="text"
              />
              <img
                src="/images/header-search.svg"
                className="header__search-button"
                alt=""
              />
            </div>
            <img
              src="/images/Notification.svg"
              width="40px"
              height="40px"
              className="header__notif"
              alt=""
            />
            <button className="header__upload-btn">Upload</button>
            <button className="header__connect-btn">Connect Wallet</button>
          </div>
          <img
            src="/images/header-burger.svg"
            alt=""
            className="header__burger"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("");
  if (theme === "") {
    document.body.children[0].style.background = "white";
    document.body.children[0].style.color = "black";
  } else {
    document.body.children[0].style.background = "black";
    document.body.children[0].style.color = "white";
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <Link to="/">
              <div className="header__logo"></div>
            </Link>
            <div className="header__line"></div>
            <button
              className="change-theme"
              onClick={() => (theme == "" ? setTheme(" ") : setTheme(""))}
            >
              {theme}
            </button>
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
            <Link to="/profile">
              <img
                src="/images/Notification.svg"
                width="40px"
                height="40px"
                className="header__notif"
                alt=""
              />
            </Link>
            <Link to="/home/upload">
              <button className="header__upload-btn">Upload</button>
            </Link>
            <button className="header__connect-btn">Connect Wallet</button>
            <div className="acc-ava"></div>
            <Link to="/home/upload">
              <img
                src="/images/header-burger.svg"
                alt=""
                className="header__burger"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

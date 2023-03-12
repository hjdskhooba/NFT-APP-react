import React from 'react'

const Header = () => {
  return (
    <>
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <a href="./discover.html">
                            <div className="header__logo"></div>
                        </a>
                        <div className="header__line"></div>
                        <div className="header__nav">
                            <a href="./discover.html">
                                <p>Discover</p>
                            </a>
                            <a href="">
                                <p>How it work</p>
                            </a>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__search__block">
                            <input placeholder="Search" className="header__search" type="text"/>
                            <img src="/images/header-search.svg" className="header__search-button" alt=""/>
                        </div>
                        <img src="/images/Notification.svg" width="40px" height="40px" className="header__notif" alt=""/>
                        <button className="header__upload-btn">Upload</button>
                        <button className="header__connect-btn">Connect Wallet</button>
                    </div>
                    <img src="/images/header-burger.svg" alt="" className="header__burger"/>
                </div>
            </div>
        </header>  
    </>
  )
}

export default Header
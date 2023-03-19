import React, { useState } from "react";
import ikys from "../../../../images/discover/discover/ikys.svg";
import littleSun from "../../../../images/discover/discover/like_sun.svg"
import HotbidCards from "../Hotbid/HotbidCards";

const Discover = () => {
  const [value, setValue] = useState("5");
  const range = (e) => {
    if (e.target.value != 99) {
      setValue(e.target.value[0]);
    } else {
      setValue(+e.target.value[0] + 1);
    }
  };
  return (
    <div className="discover">
      <div className="container">
        <div className="discover__inner">
          <h2 className="title">Discover</h2>
          <div className="discover__body">
            <div className="discover__body_head">
              <div className="title__option disflex acenter">
                <p className="title__option-time poppins f500">
                  Recently added
                </p>
                <div className="title__option-arrow arrow-down"></div>
              </div>
              <ul className="discover_nav disflex">
                <li>All items</li>
                <li>Art</li>
                <li>Game</li>
                <li>Photography</li>
                <li className="adaptiveDN">Music</li>
                <li className="adaptiveDN">Video</li>
              </ul>
              <div className="title__option disflex acenter">
                <p className="title__option-time poppins f500">
                  Recently added
                </p>
                <div className="title__option-arrow arrow-down"></div>
              </div>
              <button className="discover_nav-btn dmsans f700">
                Filter <img src={ikys} alt="" />
              </button>
            </div>
            <div className="discover__body_filters disflex">
              <div className="filters_item">
                <small className="poppins f700 likegray">Price</small>
                <div className="title__option disflex acenter">
                  <p className="title__option-time poppins f500">
                  Highest price
                  </p>
                  <div className="title__option-arrow arrow-down"></div>
                </div>
              </div>
              <div className="filters_item second">
                <small className="poppins f700 likegray">Price</small>
                <div className="title__option disflex acenter">
                  <p className="title__option-time poppins f500">
                  Most liked  
                  </p>
                  <div className="title__option-arrow arrow-down"></div>
                </div>
              </div>
              <div className="filters_item third">
                <small className="poppins f700 likegray">Price</small>
                <div className="title__option disflex acenter">
                  <p className="title__option-time poppins f500">
                    Recently added
                  </p>
                  <div className="title__option-arrow arrow-down"></div>
                </div>
              </div>
              <div className="filters_item range tcenter">
                <span>{value} ETH</span>
                <small className="likegray poppins f700">Price range</small>
                <input type="range" step="11" onInput={(e) => range(e)} />
                <div className="disflex">
                  <p>0.01 ETH</p>
                  <p>10 ETH</p>
                </div>
              </div>
            </div>
            <br />
            <div className="forScroll">
              <HotbidCards key={2}/>
            </div>
            <br />
            <br />
            <div className="forScroll forDN">
              <HotbidCards className="offsecond" />
            </div>
          </div>
          <button className="lmore-btn dmsans f700 cht2">Load more <img src={littleSun} alt="" /></button>
          <div className="arrows disflex tcenter">
            <b className="prev poppins f700"></b>
            <b className="next poppins f700"></b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

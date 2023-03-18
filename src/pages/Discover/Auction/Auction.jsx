import React from "react";
import { Link } from "react-router-dom";
import firstNft from "../../../../images/discover/auction/first-painting.png";

const Auction = () => {
  return (
    <div className="auction__block">
      <div className="container">
        <div className="auction__inner">
          <div className="auction__inner-left tcenter">
            <img src={firstNft} className="auction__inner-left-img" alt="" />
            <audio
              src=""
              controls
              className="auction__inner-left-player"
            ></audio>
          </div>
          <div className="auction__inner-right">
            <h2 className="auction__inner-right-title dmsans cht2">
              the creator network®
            </h2>
            <div className="auction__inner-right-acc disflex">
              <div className="auction__inner-right-acc-left disflex">
                <div className="austin-avatar"></div>
                <div className="austin-right poppins">
                  <small className="austin-info-top likegray">Creator</small>
                  <br />
                  <small className="austin-info-bottom cht2">Enrico Cole</small>
                </div>
              </div>
              <div className="auction__inner-right-acc-left disflex">
                <div className="austin-avatar icon"></div>
                <div className="austin-right poppins">
                  <small className="austin-info-top f400 likegray">
                    Instant price
                  </small>
                  <br />
                  <small className="austin-info-bottom f500 cht2">
                    3.5 ETH
                  </small>
                </div>
              </div>
            </div>
            <div className="auction__inner-right-middle tcenter border2">
              <p className="auction__inner-right-middle-topText poppins f500 cht2">
                Current Bid
              </p>
              <h2 className="cht4 dmsans f700">1.00 ETH</h2>
              <h4 className="likegray poppins f600">$3,618.36</h4>
              <div className="auction__inner-right-middle-bottom">
                <p className="poppins cht2 f500">Auction ending in</p>
                <div className="auction__inner-right-middle-timer tcenter disflex">
                  <div className="hours">
                    <h3 className="f700 dmsans cht4">19</h3>
                    <small className="likegray poppins">Hrs</small>
                  </div>
                  <div className="minutes">
                    <h3 className="f700 dmsans cht4">24</h3>
                    <small className="likegray poppins">mins</small>
                  </div>
                  <div className="secs">
                    <h3 className="f700 dmsans cht4">19</h3>
                    <small className="likegray poppins">secs</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="auction__inner-right-bottom">
              <button className="btn-blue dmsans f700 tcenter likewhite">
                Place a bid
              </button>
              <Link to='/item/1'>
                <button className="auction__inner-right-bottom-btn-white dmsans f700 tcenter">
                  View item
                </button>
              </Link>
              <div className="auction__inner-right-bottom-arrows">
                <b className="prev poppins f700"></b>
                <b className="next poppins f700"></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;

import React from "react";
import firstNft from "../../../images/discover/auction/first-painting.png";
import heart from "../../../images/item/heart.svg";
import dots from "../../../images/item/duts.svg";
import ikys from "../../../images/item/ikys.svg";
import share from "../../../images/item/share.svg";

const item = () => {
  return (
    <div className="item-1">
      <div className="container item">
        <div className="item__inner">
          <div className="auction__inner-left item_img tcenter">
            <img src={firstNft} className="auction__inner-left-img" alt="" />
            <div className="div art">Art</div>
            <div className="div unbockable">Ublockable</div>
            <div className="item_btns">
              <div>
                <img src={ikys} alt="" />
              </div>
              <div>
                <img src={share} alt="" />
              </div>
              <div>
                <img src={heart} alt="" />
              </div>
              <div className="last">
                <img src={dots} alt="" />
              </div>
            </div>
          </div>
          <div className="item_info">
            <h2 className="title">The amazing art</h2>
            <div className="subtitle disflex acenter">
              <p className="greennum one f700">2.5 ETH</p>
              <p className="greennum two likegray">$4,429.87</p>
              <p className="dmsans three f700 likegray">10 in stock</p>
            </div>
            <p className="likegray f400 poppins">
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit{" "}
              <span className="cht2 f600">https://ui8.net</span>
            </p>
            <ul className="discover_nav disflex">
              <li>Info</li>
              <li>Owners</li>
              <li>History</li>
              <li>Bids</li>
            </ul>
            <div className="div">
              <div className="people disflex acenter">
                <div className="acc-ava card first">
                  <span></span>
                </div>
                <div>
                  <p className="likegray">Owner</p>
                  <p>Raquel Will</p>
                </div>
              </div>
              <div className="people disflex acenter">
                <div className="acc-ava card third"></div>
                <div>
                  <p className="likegray">Creator</p>
                  <p>Selina Mayert</p>
                </div>
              </div>
            </div>
            <div className="record_block">
              <div className="record_block_info disflex acenter">
                <div className="acc-ava card third"></div>
                <div>
                  <b className="one disflex">
                    <p className="one likegray f500 poppins">Highest bid by</p>
                    <p className="two poppins f500 cht2">Kohaku Tora</p>
                  </b>
                  <b className="two disflex">
                    <p className="three f600 poppins">1.46 ETH</p>
                    <p className="four f600 poppins likegray">$2,764.89</p>
                  </b>
                </div>
              </div>
              <div className="record_block_btns disflex">
                <button className="btn-blue tcenter">Purchase now</button>
                <button className="btn-blue tcenter">Place a bid</button>
              </div>
              <div className="record_block_sub likegray f500 poppins">
                Service fee 1.5% 2.563 ETH $4,540.62
              </div>
            </div>
          </div>
          <div className="item_btns">
            <div className="first">
              <img src={ikys} alt="" />
            </div>
            <div>
              <img src={share} alt="" />
            </div>
            <div>
              <img src={heart} alt="" />
            </div>
            <div>
              <img src={dots} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;

import React from "react";
import cardHeadIcon from "../../../../images/discover/top-creators/Line.svg";
import cardHeadIconR from "../../../../images/discover/top-creators/card-head-icons.svg";

const TopCreators = () => {
  return (
    <div className="top-creators">
      <div className="container">
        <div className="top-creators__title acenter">
          <div className="title__text">
            <h2 className="title-popular poppins f600 likegray">Popular</h2>
            <h1 className="title disflex acenter">
              Sellers <div className="arrow-down"></div>
            </h1>
          </div>
          <div className="title__right">
            <p className="poppins f700">timeframe</p>
            <div className="title__option disflex acenter">
              <p className="title__option-time poppins f500">Today</p>
              <div className="title__option-arrow arrow-down"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-creators--container disflex">
        <b className="prev poppins f700"></b>
        <div className="top-creators__inner">
          <div className="top-creators__cards">
            <div className="top-creators__cards__item one">
              <div className="card__item__head disflex acenter">
                <div className="card__item__head-left disflex acenter tcenter">
                  <img height="16px" src={cardHeadIcon} alt="" />
                  <small className="poppins f600">#1</small>
                </div>
                <div className="card__item__head-right">
                  <img src={cardHeadIconR} alt="" />
                </div>
              </div>
              <div className="card__item__body tcenter">
                <div className="acc-ava card first">
                  <span></span>
                </div>
                <p className="poppins cht2 f500">Edd Harris</p>
                <small className="poppins f600">
                  2.456 <span className="poppins f400 likegray">ETH</span>
                </small>
              </div>
            </div>
            <div className="top-creators__cards__item two">
              <div className="card__item__head disflex acenter">
                <div className="card__item__head-left disflex acenter tcenter">
                  <img height="16px" src={cardHeadIcon} alt="" />
                  <small className="poppins f600">#2</small>
                </div>
                <div className="card__item__head-right">
                  <img src={cardHeadIconR} alt="" />
                </div>
              </div>
              <div className="card__item__body tcenter">
                <div className="acc-ava card">
                  <span></span>
                </div>
                <p className="poppins cht2 f500">Edd Harris</p>
                <small className="poppins f600">
                  2.456 <span className="poppins f400 likegray">ETH</span>
                </small>
              </div>
            </div>
            <div className="top-creators__cards__item three">
              <div className="card__item__head disflex acenter">
                <div className="card__item__head-left disflex acenter tcenter">
                  <img height="16px" src={cardHeadIcon} alt="" />
                  <small className="poppins f600">#2</small>
                </div>
                <div className="card__item__head-right">
                  <img src={cardHeadIconR} alt="" />
                </div>
              </div>
              <div className="card__item__body tcenter">
                <div className="acc-ava card three">
                  <span></span>
                </div>
                <p className="poppins cht2 f500">Edd Harris</p>
                <small className="poppins f600">
                  2.456 <span className="poppins f400 likegray">ETH</span>
                </small>
              </div>
            </div>
            <div className="top-creators__cards__item four">
              <div className="card__item__head disflex acenter">
                <div className="card__item__head-left disflex acenter tcenter">
                  <img height="16px" src={cardHeadIcon} alt="" />
                  <small className="poppins f600">#4</small>
                </div>
                <div className="card__item__head-right">
                  <img src={cardHeadIconR} alt="" />
                </div>
              </div>
              <div className="card__item__body tcenter">
                <div className="acc-ava card">
                  <span></span>
                </div>
                <p className="poppins cht2 f500">Edd Harris</p>
                <small className="poppins f600">
                  2.456 <span className="poppins f400 likegray">ETH</span>
                </small>
              </div>
            </div>
            <div className="top-creators__cards__item five">
              <div className="card__item__head disflex acenter">
                <div className="card__item__head-left disflex acenter tcenter">
                  <img height="16px" src={cardHeadIcon} alt="" />
                  <small className="poppins f600">#5</small>
                </div>
                <div className="card__item__head-right">
                  <img src={cardHeadIconR} alt="" />
                </div>
              </div>
              <div className="card__item__body tcenter">
                <div className="acc-ava card">
                  <span></span>
                </div>
                <p className="poppins cht2 f500">Edd Harris</p>
                <small className="poppins f600">
                  2.456 <span className="poppins f400 likegray">ETH</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <b className="next poppins f700"></b>
      </div>
    </div>
  );
};

export default TopCreators;

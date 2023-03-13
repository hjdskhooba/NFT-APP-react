import React from 'react'
import infoMiddleOne from "../../../../images/discover/feed/info-mid-1.png";
import infoMiddleTwo from "../../../../images/discover/feed/info-mid-2.png";
import infoMiddleThree from "../../../../images/discover/feed/info-mid-3.png";

const Feed = () => {
  return (
    <div className="feed__block">
    <div className="container">
      <div className="feed__fordf disflex">
        <div className="feed__block__inner disflex">
          {/* <!-- --- --> */}
          <div className="feed__block__inner-left">
            <div className="feed__block__inner-left-img">
              {/* <!-- background-image --> */}
            </div>
            <div className="feed__block__inner-left-info disflex">
              <div className="feed__block__inner-left-info-acc disflex">
                <div className="avatar"></div>
                <div className="avatar-right poppins">
                  <h4 className="avatar-info-top poppins f600">
                    The future of ETH®
                  </h4>
                  <small className="avatar-info-bottom poppins f500">
                    18 in stock
                  </small>
                </div>
              </div>
              <div className="feed__block__inner-left-info-right">
                <p className="feed__block__inner-left-info-right-p1 poppins f400 likegray">
                  Highest bid
                </p>
                <p className="feed__block__inner-left-info-right-p2 poppins f700">
                  1.125 ETH
                </p>
              </div>
            </div>
          </div>
          {/* <!-- --- --> */}
          <div className="feed__block__inner-middle">
            <div className="feed__block__inner-middle-top disflex acenter">
              <img
                src={infoMiddleOne}
                className="feed__block__inner-middle-top-img"
                alt=""
              />
              <div className="feed__block__inner-middle-top-descrip">
                <h4 className="poppins f500 cht2">ETH never die</h4>
                <div className="disflex acenter">
                  <div className="avatar24"></div>
                  <p className="feed__block__inner-left-info-right-p2 scrrra poppins f700">
                    0.27 ETH
                  </p>
                  <p className="ptwoforthis poppins f400 likegray">
                    1 of 12
                  </p>
                </div>
                <button className="dmsans f600 cht2">Place a bid</button>
              </div>
            </div>
            <div className="feed__block__inner-middle-middle disflex acenter">
              <img
                src={infoMiddleTwo}
                className="feed__block__inner-middle-top-img"
                alt=""
              />
              <div className="feed__block__inner-middle-top-descrip">
                <h4 className="poppins f500 cht2">Future coming soon</h4>
                <div className="disflex acenter">
                  <div className="avatar24"></div>
                  <p className="feed__block__inner-left-info-right-p2 scrrra poppins f700">
                    0.27 ETH
                  </p>
                  <p className="ptwoforthis poppins f400 likegray">
                    1 of 3
                  </p>
                </div>
                <button className="dmsans f600 cht2">Place a bid</button>
              </div>
            </div>
            <div className="feed__block__inner-middle-bottom disflex acenter">
              <img
                src={infoMiddleThree}
                className="feed__block__inner-middle-top-img"
                alt=""
              />
              <div className="feed__block__inner-middle-top-descrip">
                <h4 className="poppins f500 cht2">
                  Elon Musk silver coin 3d print
                </h4>
                <div className="disflex acenter">
                  <div className="avatar24"></div>
                  <p className="feed__block__inner-left-info-right-p2 scrrra poppins f700">
                    0.27 ETH
                  </p>
                  <p className="ptwoforthis poppins f400 likegray">
                    1 of 4
                  </p>
                </div>
                <button className="dmsans f600 cht2">Place a bid</button>
              </div>
            </div>
          </div>
          {/* <!-- --- --> */}
        </div>
        <div className="feed__block__inner-right">
          <p className="poppins likegray f600">
            Latest upload from creators 🔥
          </p>
          <div className="feed__block__inner-right-column">
            <div className="feed__block__inner-right-column-item one acenter disflex">
              <div className="acc-ava">
                <span className="shesterka poppins f600">6</span>
              </div>
              <div className="feed__block__inner-right-column-item-right poppins">
                <p className="f500 cht2">Payton Harris</p>
                <small className="poppins disflex">
                  2.456 <p className="likegray"> ETH</p>
                </small>
              </div>
            </div>
            <div className="feed__block__inner-right-column-line"></div>
            <div className="feed__block__inner-right-column-item two acenter disflex">
              <div
                style={{ backgroundColor: "aquamarine" }}
                className="acc-ava"
              >
                <span className="shesterka poppins f600">3</span>
              </div>
              <div className="feed__block__inner-right-column-item-right poppins">
                <p className="f500 cht2">Anita Bins</p>
                <small className="poppins disflex">
                  2.456 <p className="likegray"> ETH</p>
                </small>
              </div>
            </div>
            <div className="feed__block__inner-right-column-line"></div>
            <div className="feed__block__inner-right-column-item three acenter disflex">
              <div className="acc-ava">
                <span className="shesterka poppins f600">1</span>
              </div>
              <div className="feed__block__inner-right-column-item-right poppins">
                <p className="f500 cht2">Joana Wuckert</p>
                <small className="poppins disflex">
                  2.456 <p className="likegray"> ETH</p>
                </small>
              </div>
            </div>
            <div className="feed__block__inner-right-column-line"></div>
            <div className="feed__block__inner-right-column-item four acenter disflex">
              <div
                style={{ backgroundColor: "#EF466F" }}
                className="acc-ava"
              >
                <span className="shesterka poppins f600">12</span>
              </div>
              <div className="feed__block__inner-right-column-item-right poppins">
                <p className="f500 cht2">Lorena Ledner</p>
                <small className="poppins disflex">
                  2.456 <p className="likegray"> ETH</p>
                </small>
              </div>
            </div>
            <div className="feed__block__inner-right-column-button disflex acenter tcenter">
              <p className="dmsans f700 cht2">Discover more</p>&#8594;
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feed
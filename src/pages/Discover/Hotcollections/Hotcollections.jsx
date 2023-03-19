import React from "react";
import img1 from '../../../../images/discover/hot-collections/bird.png'
import img2 from '../../../../images/discover/hot-collections/placeholder.png'
import img3 from '../../../../images/discover/hot-collections/bird.png'

const Hotcollections = () => {
  return (
    <div className="hotCollections">
      <div className="container">
        <div className="hotColections__inner">
          <div className="hotCollections_title disflex">
            <h2 className="title">Hot Collections</h2>
            <div className="disflex acenter tcenter">
              <b className="prev"></b>
              <b className="next"></b>
            </div>
          </div>
          <div className="forjcsb disflex">
            <div className="hotCollections__block">
              <img src={img1} alt="" className="top_img"/>
              <div className="bottom-images disflex acenter">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
              </div>
              <h3 className="subtitle">Awesome collection</h3>
              <div className="hotCollections__author disflex acenter">
                <div className="hotCollections__author_left disflex acenter">
                  <div className="acc-ava"></div>
                  <p className="pshka poppins f500">By Kennith Olson</p>
                </div>
                <span className="poppins f700">28 items</span>
              </div>
            </div>
            <div className="hotCollections__block">
            <img src={img2} alt="" className="top_img dva"/>
              <div className="bottom-images disflex acenter">
                <div className="first dva"></div>
                <div className="second dva"></div>
                <div className="third dva"></div>
              </div>
              <h3 className="subtitle">Awesome collection</h3>
              <div className="hotCollections__author disflex acenter">
                <div className="hotCollections__author_left disflex acenter">
                  <div className="acc-ava"></div>
                  <p className="pshka poppins f500">By Kennith Olson</p>
                </div>
                <span className="poppins f700">28 items</span>
              </div>
            </div>
            <div className="hotCollections__block">
            <img src={img3} alt="" className="top_img"/>
              <div className="bottom-images disflex acenter">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
              </div>
              <h3 className="subtitle">Awesome collection</h3>
              <div className="hotCollections__author disflex acenter">
                <div className="hotCollections__author_left disflex acenter">
                  <div className="acc-ava"></div>
                  <p className="pshka poppins f500">By Kennith Olson</p>
                </div>
                <span className="poppins f700">28 items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotcollections;

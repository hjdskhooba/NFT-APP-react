import React from "react";
import HotbidCards from "./HotbidCards";

const Hotbid = () => {
  return (
    <div className="hotbid">
      <div className="container">
        <div className="hotbid__inner">
          <div className="hotbid__inner">
            <div className="hotbid__title disflex">
              <h2 className="title">Hot Bid</h2>
              <div className="disflex acenter tcenter">
                <b className="prev"></b>
                <b className="next"></b>
              </div>
            </div>
            <div className="forScroll">
              <HotbidCards key='1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotbid;

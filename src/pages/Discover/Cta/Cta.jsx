import React from "react";
import ctaImg from "../../../../images/discover/cta/cta-img.png";

const Cta = () => {
  return (
    <div className="cta">
      <div className="container">
        <div className="cta__inner disflex acenter">
          <div className="cta_title">
            <p className="poppins f700">Save your time with Stacks</p>
            <h1 className="title">Earn free crypto with Crypter</h1>
            <br />
            <span className="tdbc poppins f400">
              A creative agency that lead and inspire
            </span>
            <br />
            <br />
            <br />
            <div className="disflex">
              <button className="discover_nav-btn dmsans f700">Earn now</button>
              <button className="discover_nav-btn two dmsans f700">
                Discover more
              </button>
            </div>
          </div>
          <div className="cta-img">
            <img src={ctaImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

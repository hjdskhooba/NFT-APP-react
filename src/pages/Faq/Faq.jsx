import React from "react";
import one from "../../../images/faq/one.svg";
import two from "../../../images/faq/two.svg";
import three from "../../../images/faq/three.svg";
import four from "../../../images/faq/four.svg";
import Hotbid from "../Discover/Hotbid/Hotbid";

const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <div className="faq__inner">
          <div className="faq__title top">
            <small className="poppins f700 likegray">
              learn how to get started
            </small>
            <h2 className="title">Frequently asked questions</h2>
            <p className="poppins f400">
              Join Stacks community now to get free updates and also alot of
              freebies are waiting for you or <span>Contact Support</span>
            </p>
          </div>
          <div className="faq__body">
            <div className="faq__navigation left f700 dmsans cht2">
              <div className="acenter disflex">
                <img src={one} alt="" /> General
              </div>
              <div className="acenter disflex">
                <img src={two} alt="" /> Support
              </div>
              <div className="acenter disflex">
                <img src={three} alt="" /> Hosting
              </div>
              <div className="acenter disflex">
                <img src={four} alt="" /> Product
              </div>
            </div>
            <div className="faq__nav mob">
              <div className="title__option disflex acenter">
                <p className="title__option-time poppins f500">Highest price</p>
                <div className="title__option-arrow arrow-down"></div>
              </div>
            </div>
            <div className="faq__questions right">
              <div className="question one">
                <span className="h4 disflex acenter">
                  <h4 className="poppins f500 cht2">How does it work</h4>
                  <b className="arrow-down"></b>
                </span>
                <p className="likegray f400 poppins">
                  The Stacks series of products: Stacks: Landing Page Kit,
                  Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                  production-ready library of stackable content blocks built in
                  React Native. Mix-and-match dozens of responsive elements to
                  quickly configure your favorite landing page layouts or hit
                  the ground running with 10 pre-built templates, all in light
                  or dark mode."{" "}
                </p>
                <button className="btn-blue tcenter">Learn More</button>
              </div>
              <span className="h4 disflex acenter">
                <h4 className="poppins f500 cht2">How to start with Stacks</h4>
                <b className="arrow-down"></b>
              </span>
              <span className="h4 disflex acenter">
                <h4 className="poppins f500 cht2">
                  Dose it suppport Dark Mode
                </h4>
                <b className="arrow-down"></b>
              </span>
              <span className="h4 disflex acenter">
                <h4 className="poppins f500 cht2">
                  Does it support Auto-Layout
                </h4>
                <b className="arrow-down"></b>
              </span>
              <span className="h4 disflex acenter">
                <h4 className="poppins f500 cht2">
                  What is Stacks Design System
                </h4>
                <b className="arrow-down"></b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Hotbid/>
    </div>
  );
};

export default Faq;

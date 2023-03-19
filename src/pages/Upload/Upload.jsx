import React from "react";
import uploadSingle from "../../../images/upload/img.png";
import uploadMultiple from "../../../images/upload/img-1.png";
import uploadResSin from "../../../images/upload/icon.svg";
import uploadResMult from "../../../images/upload/icon2.svg";
import { Link } from "react-router-dom";
const Upload = () => {
  return (
    <div className="upload">
      <div className="upload__head">
        <div className="container">
          <div className="upload__head_inner disflex acenter">
            <Link to="/" className="back_home-btn acenter disflex">
              <b className="prev"></b>
              <p>Back to home</p>
            </Link>
            <ul className="nav acenter disflex">
              <li className="likegray">Home</li>
              <li className="nav-arr"></li>
              <li>Upload Item</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="upload__body">
        <div className="container">
          <div className="upload__body_inner tcenter">
            <br />
            <br />
            <h2 className="title">Upload item</h2>
            <p className="likegray poppins f400">
              Choose <span className="cht2">“Single”</span> if you want your
              collectible to be one of a kind or{" "}
              <span className="cht2">“Multiple”</span> if you want to sell one
              collectible multiple times
            </p>
            <div className="choose disflex">
              <div className="upload_single">
                <img src={uploadSingle} alt="" />
                <br />
                <button className="dmsans f700">Create Single</button>
              </div>
              <div className="upload_multiple">
                <img src={uploadMultiple} alt="" />
                <br />
                <button className="dmsans f700">Create Multiple</button>
              </div>
            </div>
            <div className="acenter">
              <div className="single">
                <img src={uploadResSin} alt="" />
                <p>Create Single</p>
                <div className="nav-arr"></div>
              </div>
              <div className="multiple">
                <img src={uploadResMult} alt="" />
                <p>Create Multiple</p>
                <div className="nav-arr"></div>
              </div>
            </div>
            <small className="likegray f400 poppins">
              We do not own your private keys and cannot access your funds
              without your confirmation.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;

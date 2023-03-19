import React from "react";
import plus from "../../../../images/Profile/edit/plus.svg";
import ikys from "../../../../images/Profile/edit/ikys.svg";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="profile__edit">
      <div className="upload__head prof_head">
        <div className="container">
          <div className="upload__head_inner disflex acenter">
            <Link to="/profile" className="back_home-btn acenter disflex">
              <b className="prev"></b>
              <p>Back to profile</p>
            </Link>
            <ul className="nav acenter disflex">
              <li className="likegray">Home</li>
              <li className="nav-arr"></li>
              <li>Edit Profile</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="edit-profile__body">
        <div className="container">
          <div className="edit-profile__inner">
            <h2 className="title">Edit profile</h2>
            <p className="f500 poppins likegray">
              You can set preferred display name, create{" "}
              <span className="cht2">your profile URL</span> and manage other
              personal settings.
            </p>
            <div className="fordfdn disflex">
              <div className="edit_photo disflex">
                <div className="acc-ava card first"></div>
                <div>
                  <p className="f500 poppins">Profile photo</p>
                  <small className="poppins f400 likegray">
                    We recommend an image of at least 400x400. <br /> Gifs work
                    too 🙌
                  </small>
                  <button className="btn-blue border2">Upload</button>
                </div>
              </div>
              <div className="acc__settings">
                <div className="acc_info">
                  <p className="poppins f500">Account info</p>
                  <div className="block">
                    <small>display name</small>
                    <input type="text" placeholder="Enter your display name" />
                  </div>
                  <div className="block">
                    <small>Custom url</small>
                    <input type="text" placeholder="ui8.net/Your custom URL" />
                  </div>
                  <div className="block">
                    <small>BIO</small>
                    <textarea
                      type="text"
                      placeholder="About yourselt in a few words"
                    />
                  </div>
                </div>
                <div className="acc_social">
                  <p className="poppins f500">Social</p>
                  <div className="acc_info">
                    <div className="block">
                      <small>portfolio or website</small>
                      <input type="text" placeholder="Enter URL" />
                    </div>
                    <div className="block">
                      <small>Twitter</small>
                      <input
                        type="text"
                        placeholder="@twitter username"
                      ></input>
                      <button className="btn-blue dmsans f700 cht2 f14">
                        Verify account
                      </button>
                    </div>
                    <div className="btn-blue border2 dmsans f700">
                      <img src={plus} alt="" />
                      <span className="likegray">Add more social account</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="likegray poppins f400">
              To update your settings you should sign message through your
              wallet. Click 'Update profile' then sign the message
            </p>
            <div className="btns">
              <button className="btn-blue">Update Profile</button>
              <button className="btn-blue acenter">
                <img width='20px' height='20px' src={ikys} alt="" /> Clear all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

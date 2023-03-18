import React from "react";
import imgIcon from "../../../images/Profile/imgh.svg";
import editIcon from "../../../images/Profile/edit.svg";
import globe from "../../../images/Profile/globe.svg";
import coins from "../../../images/Profile/coins.svg";
import inst from "../../../images/Profile/Line.svg";
import face from "../../../images/Profile/Line2.svg";
import twit from "../../../images/Profile/Line3.svg";
import share from "../../../images/item/share.svg";
import dots from "../../../images/item/duts.svg";
import HotbidCards from "../Discover/Hotbid/HotbidCards";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__head">
        <div className="container">
          <div className="profile__head__inner">
            <div className="btn-blue tcenter dmsans f700">
              Edit cover photo <img src={imgIcon} alt="" />
            </div>
            <div className="btn-blue tcenter dmsans f700">
              <Link className="likewhite">Edit profile <img src={editIcon} alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__body">
        <div className="container prof">
          <div className="profile__body__inner">
            <div className="profile__body_acc tcenter">
              <div className="acc-ava card first"></div>
              <h4 className="subtitle f600">Enrico Cole</h4>
              <p className="dmsans f700 ch2 acenter">
                0xc4c16a645...b21a <img src={coins} alt="" />
              </p>
              <small className="margins poppins f400 likegray">
                A wholesome farm owner in Montana. Upcoming gallery solo show in
                Germany
              </small>
              <p className="acenter disflex tcenter dmsans f700">
                <img className="likegray" src={globe} alt="" /> https://ui8.net
              </p>
              <div className="profile_btns disflex acenter">
                <div className="btn-blue tcenter dmsans f700">Follow</div>
                <div className="item_btns">
                  <div>
                    <img src={share} alt="" />
                  </div>
                  <div>
                    <img src={dots} alt="" />
                  </div>
                </div>
              </div>
              <div className="contact_icons">
                <img src={twit} alt="" />
                <img src={inst} alt="" />
                <img src={face} alt="" />
              </div>
              <div className="line"></div>
              <small className="poppins f400">Member since Mar 15, 2021</small>
            </div>
            <div>
              <ul className="discover_nav disflex">
                <li>On Sale</li>
                <li>Collectibles</li>
                <li>Created</li>
                <li>Likes</li>
                <li>Following</li>
                <li>Followers</li>
              </ul>
              <div className="forFW forScroll">
                <HotbidCards />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

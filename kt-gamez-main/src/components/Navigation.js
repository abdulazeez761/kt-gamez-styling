import React from "react";
import "./Navigation.css";
import Sidebar from "./Sidebar";
import logo from "../asserts/logos/logo2.png";
import avatar from "../asserts/avatar/01.png";

function Navigation() {
  return (
    <div className="navigation">
      {/* <div className="inputs">
        <input placeholder="search" />
      </div> */}

      <div className="profile">
        <div className="left-profile">
          <ul className="sidebar-header">
            {/* <img src={logo} className="logo" /> */}
            <p className="sidebar-kt">KT Gamez</p>
          </ul>
        </div>
        <div className="right-profile">
          <div className="kttokens">
            <i class="fas fa-wallet"></i>
            <p>1000 KT Tokens</p>
          </div>
          <div className="ktpoints">
            <i class="fas fa-database"></i>
            <p>10 KT Points</p>
          </div>
          <div className="notification">
            <i class="fas fa-bell"></i>
          </div>
          <div className="user-profile">
            <div className="avatar-left">
              <img src={avatar} alt="" className="avatar-left" />
              <span className="tooltipinfo">
                <p>
                  <i class="fas fa-user-circle"></i>Profile
                </p>
                <p>Setting</p>
                <p>Logout</p>
              </span>
            </div>
            <div className="profile-title">
              <h2 className="user">Kinjal Prajapati</h2>
              {/* <p className="user-level">100 KT Points</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

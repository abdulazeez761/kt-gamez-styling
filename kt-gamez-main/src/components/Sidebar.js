import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../asserts/logos/logo.png";
import home from "../asserts/images/sidebarlogo/Home.png";
import Navigation from "./Navigation";
import Sidebarmini from "./Sidebarmini";

function Sidebar() {
  return (
    <div className="sidebar">
      <Navigation />

      <div className="list">
        <ul className="sidebar-list">
          <div className="">
            <Link to="/" className="link">
              <li>
                <div className="side-logo">
                  <i class="fas fa-home"></i>
                </div>
                <p id="side-title">Home</p>
              </li>
            </Link>
          </div>
          <Link to="/play" className="link">
            <li>
              <div className="side-logo">
                <i class="fas fa-gamepad"></i>
              </div>
              <p id="side-title">Play</p>
            </li>
          </Link>
          <Link to="/playnwin" className="link">
            <li>
              <div className="side-logo">
                <i class="fas fa-trophy-alt"></i>
              </div>
              <p id="side-title">Play N Win</p>
            </li>
          </Link>
          <Link to="/profile" className="link">
            <li>
              <div className="side-logo">
                <i class="fas fa-user-circle"></i>
              </div>
              <p id="side-title">Profile</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

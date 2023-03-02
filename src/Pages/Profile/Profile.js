import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <div>
      <div id="menu">
        <div className="menu-left-space"></div>
        <div className="menu-left">
          <h3>General</h3>
          <ul className="menu-items">
            <li className="menu-item">
              <span>
                <i className="uil uil-home-alt"></i> Home
              </span>
            </li>
            <li className="menu-item">
              <span>
                <i className="uil uil-comment-image"></i> Forum
              </span>
            </li>
            <li className="menu-item">
              <span>
                <i className="uil uil-shopping-bag"></i> Store
              </span>
            </li>
          </ul>
        </div>
        <div className="menu-center">
          <h3>Useful Links</h3>
          <ul className="menu-items">
            <li className="menu-item">
              <span>
                <i className="uil uil-bookmark"></i> Tutorials
              </span>
            </li>
            <li className="menu-item">
              <span>
                <i className="uil uil-map-marker-info"></i> Dynmap
              </span>
            </li>
            <li className="menu-item">
              <span>
                <i className="uil uil-server-alt"></i> Servers
              </span>
            </li>
          </ul>
        </div>
        <div className="menu-right">
          <h3>Admin Tools</h3>
          <ul className="menu-items">
            <li className="menu-item">
              <span>
                <i className="uil uil-lightbulb"></i> Control Panel
              </span>
            </li>
            <li className="menu-item">
              <span>
                <i className="uil uil-brackets-curly"></i> Code Editor
              </span>
            </li>
            <li className="menu-item">
              <span>
                <i className="uil uil-window"></i> Info & Status
              </span>
            </li>
          </ul>
        </div>
        <div className="menu-right-space"></div>
      </div>
      <div
        className="back-to-top"
        style={{ display: "block", opacity: "1" }}
      ></div>
      <main>
        <div className="user-header-wrapper flexbox">
          <div className="user-header-inner flexbox">
            <div className="user-header-overlay"></div>
            <img
              className="user-header"
              src="https://i.imgur.com/WS9ODfZ.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="user-info-bar">
          <div className="ufo-bar-col1"></div>
          <div className="ufo-bar-col2">
            <div className="ufo-bar-col2-inner">
              <div className="user-icon-wrapper">
                <img
                  className="user-icon"
                  src="https://i.imgur.com/aviQ5vj.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="ufo-bar-col3">
            <div className="ufo-bar-col3-inner">
              <div className="username-wrapper-outer">
                <div className="username-wrapper">
                  <div
                    className="verified"
                    style={{ opacity: "0", top: "150%" }}
                  >
                    <p>Verified Account</p>
                  </div>
                  <h3 className="username-dev">Areal Alien</h3>
                </div>
                <div>
                  <span>857</span> Followers
                  <span>137</span> Following
                </div>
              </div>
            </div>
          </div>
          <div className="ufo-bar-col4">
            <div className="ufo-bar-col4-inner">
              <button className="button2 btn-primary2">
                <i className="uil uil-plus"></i> Subscribe
                <div className="btn-secondary2"></div>
              </button>
            </div>
          </div>
          <div className="ufo-bar-col5"></div>
        </div>
        <div className="user-info-bar2">
          <div className="ufo-bar2-col1"></div>
          <div id="ufo-home" className="ufo-bar2-col2 ufo-bar2-block">
            <div className="ufo-bar2-col2-inner flexbox">
              <span>
                <i className="uil uil-trophy"></i>
              </span>
              <h3>Trophies</h3>
            </div>
          </div>
          <div id="ufo-videos" className="ufo-bar2-col3 ufo-bar2-block">
            <div className="ufo-bar2-col3-inner flexbox">
              <span>
                <i className="uil uil-star"></i>
              </span>
              <h3>Points</h3>
            </div>
          </div>
          <div id="ufo-images" className="ufo-bar2-col4 ufo-bar2-block">
            <div className="ufo-bar2-col4-inner flexbox">
              <span>
                <i className="uil uil-comment-alt"></i>
              </span>
              <h3>Posts</h3>
            </div>
          </div>
          <div id="ufo-about" className="ufo-bar2-col6 ufo-bar2-block">
            <div className="ufo-bar2-col6-inner flexbox">
              <span>
                <i className="uil uil-user"></i>
              </span>
              <h3>About</h3>
            </div>
          </div>
          <div className="ufo-bar2-col7"></div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

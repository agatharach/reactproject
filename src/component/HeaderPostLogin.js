import React from "react";
// https://pbs.twimg.com/profile_images/887737053542330369/t-JlOC1d_400x400.jpg
import { Link } from "react-router-dom";
import "./../asset/css/header.css";

function HeaderPostLogin() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-6">
            <div className="header-logo">
              <img
                src="https://pbs.twimg.com/profile_images/887737053542330369/t-JlOC1d_400x400.jpg"
                width="100px"
              />
            </div>
          </div>
          <div className="col-md-5">kosonggg</div>
          <div className="col-md-5 col-sm-6 align-items-center">
            <div className="float-right">
              <div className="header-menu">
                <nav className="navbar navbar-expand navbar-light justify-content-between">
                  <ul>
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Profile</Link>
                    </li>
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPostLogin;

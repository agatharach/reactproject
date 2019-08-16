import React from "react";
import { Link } from "react-router-dom";
import "./../asset/css/header.css";
function ScrollBar(props) {
  let ini = props.isi.map((elm, key) => {
    return (
      <Link to={elm.link}>
        <li className="list-group" style={{ fontWeight: 700 }}>
          {elm.genre}
        </li>
      </Link>
    );
  });
  return (
    <div className="kategori">
      <div className="navbar navbar-expand navbar-light justify-content-between">
        <ul style={{ padding: 0, margin: 0 }}>{ini}</ul>
      </div>
    </div>
  );
}
export default ScrollBar;
{
  /* <div className="float-right">
              <div className="header-menu">
                <nav className="navbar navbar-expand navbar-light justify-content-between">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={() => props.logout()}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */
}

import React from "react";
import { Link } from "react-router-dom";
import HeaderPostLogin from "./../component/HeaderPostLogin";

function Anime() {
  return (
    <div>
      <HeaderPostLogin />
      <div className="container">
        <div className="row">
          <div className="col-md-3 scroll_bar">
            <li className="list-group-item">
              <Link>
                <ul className="list-group"> Action</ul>
              </Link>
              <Link>
                <ul className="list-group">Comedy</ul>
              </Link>
              <Link>
                <ul className="list-group">Drama</ul>
              </Link>
              <Link>
                <ul className="list-group">Romance</ul>
              </Link>
              <Link>
                <ul className="list-group">Sci-fi</ul>
              </Link>
              <Link>
                <ul className="list-group">Horror</ul>
              </Link>
            </li>
          </div>
          <div className="col-md-9" />
        </div>
      </div>
    </div>
  );
}

export default Anime;

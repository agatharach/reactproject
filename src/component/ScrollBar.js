import React from "react";
import { Link } from "react-router-dom";
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
    <div>
      <p>Genre :</p>
      <ul style={{ padding: 0, margin: 0 }}>{ini}</ul>
    </div>
  );
}
export default ScrollBar;

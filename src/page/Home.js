import React from "react";
import HeaderPraLogin from "../component/HeaderPraLogin";
import HeaderPostLogin from "../component/HeaderPostLogin";
import { Link } from "react-router-dom";
// import { connect } from "unistore/react";
// import { actions } from "../store";

function Home() {
  const is_login = false;
  if (is_login) {
    return (
      <div>
        <HeaderPraLogin />
        <div className="container">
          <div className="row d-flex align-items-center homeground">
            <div className="col-12 align-self-center text-center">
              <h1>Hello Guys</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <HeaderPostLogin />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 text-right">
              <Link to="/movie">
                <img src="https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/6e/47/f6/6e47f680-ac54-21ff-a37a-3aab1a9970b0/DIS_AV_ENDGAME_FINAL_ENGLISH_US_WW_WW_ARTWORK_EN_2000x3000_1OWPBJ00000GQ6.lsr/268x0w.jpg" />
              </Link>
            </div>
            <div className="col-6 text-left">
              <Link to="/anime">
                <img
                  src="https://www.anime-planet.com/images/anime/covers/fullmetal-alchemist-437.jpg"
                  width="268px"
                  height="402px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

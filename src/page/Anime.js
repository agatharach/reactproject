import React from "react";
import { Link } from "react-router-dom";
import HeaderPostLogin from "./../component/HeaderPostLogin";

function Anime() {
    return (
        <div>
            <HeaderPostLogin />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg" />
                        <Link to="/anime/1">
                            <button>Action</button>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://cdn.myanimelist.net/images/anime/3/72078.jpg" />
                        <Link to="/anime/4">
                            <button>Comedy</button>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" />
                        <Link to="/romance/8">
                            <button>Drama</button>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://cdn.myanimelist.net/images/anime/13/24647.jpg" />
                        <Link to="/anime/22">
                            <button>Romance</button>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://cdn.myanimelist.net/images/anime/5/73199.jpg" />
                        <Link to="/anime/24">
                            <button>Sci-fi</button>
                        </Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src="https://cdn.myanimelist.net/images/anime/10/18793.jpg" />
                        <Link to="/anime/14">
                            <button>Horror</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Anime;

import React from "react";
import HeaderPraLogin from "../component/HeaderPraLogin";
import HeaderPostLogin from "../component/HeaderPostLogin";
import Quotes from "../component/Quotes";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

function Home(props) {
    if (props.is_login) {
        console.log(props.is_login);
        return (
            <div>
                <HeaderPostLogin />
                <div className="container">
                    <div className="row justify-content-center">
                        <div
                            className="col-md-4 col-sm-12 text-center align-self-center"
                            style={{ marginTop: 10 }}
                        >
                            <Link to="/manga">
                                <img
                                    src="https://vgfiles.nabstudio.com/portal/dd0ebfadb9d575ef85fc3d58b03a6d8e_22783_thumbnail.jpg"
                                    alt="manga"
                                    style={{
                                        display: "block",
                                        width: 268,
                                        height: 402
                                    }}
                                />
                                <button
                                    className="btn-primary"
                                    style={{ margin: 10 }}
                                >
                                    Manga
                                </button>
                            </Link>
                        </div>
                        <div
                            className="col-md-4 col-sm-12 text-center"
                            style={{ marginTop: 10 }}
                        >
                            <Link to="/anime">
                                <img
                                    src="https://www.anime-planet.com/images/anime/covers/fullmetal-alchemist-437.jpg"
                                    width="268px"
                                    height="402px"
                                    alt="anime"
                                    style={{ display: "block" }}
                                />
                                <button
                                    className="btn-primary"
                                    style={{ margin: 10 }}
                                >
                                    Anime
                                </button>
                            </Link>
                        </div>
                        <div
                            className="col-md-4 col-sm-12 text-center"
                            style={{ marginTop: 10 }}
                        >
                            <Link to="/book">
                                <img
                                    src="https://www.anime-planet.com/images/anime/covers/fullmetal-alchemist-437.jpg"
                                    width="268px"
                                    height="402px"
                                    alt="anime"
                                    style={{ display: "block" }}
                                />
                                <button
                                    className="btn-primary"
                                    style={{ margin: 10 }}
                                >
                                    Books
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        console.log(props.is_login);
        return (
            <div>
                <HeaderPraLogin />
                <div className="container">
                    <div
                        className="row d-flex align-items-center homeground"
                        style={{ backgroundColor: "white" }}
                    >
                        <div className="col-12 align-self-center text-center">
                            <h1 style={{ color: "#8FB2E2", fontSize: 60 }}>
                                Welcome to ChillZone
                            </h1>
                            <p style={{ fontSize: 20 }}>
                                Please proceed to login page
                            </p>
                            <br />
                            <Quotes />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "is_login",
    actions
)(Home);

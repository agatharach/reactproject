import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput1 = this.handleInput1.bind(this);
        this.handleInput2 = this.handleInput2.bind(this);
    }

    handleInput1(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.props.setUser(event.target.value);
        }
    }

    handleInput2(event) {
        const self = this;
        if (event.target.value.length > 0) {
            self.props.setEmail(event.target.value);
        }
    }

    postLogin() {
        const self = this;
        self.props.login();
        self.props.history.replace("/profile");
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-5 d-flex align-items-center nol">
                                <img
                                    src="https://wallpapercave.com/wp/wp1892100.jpg"
                                    width="100%"
                                    height="650px"
                                    alt=""
                                    id="left-image"
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="row d-flex align-items-center homeground">
                                    <div className="col-md-12 align-self-center text-center">
                                        <div className="login">
                                            <section className="content signin d-flex justify-content-center">
                                                <form
                                                    style={{
                                                        height: "310px",
                                                        width: 400
                                                    }}
                                                    onSubmit={this.handleSubmit}
                                                    className="border p-5 align-self-center text-center"
                                                >
                                                    <h4>Sign In</h4>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="text"
                                                            name="username"
                                                            placeholder="Username"
                                                            onChange={
                                                                this
                                                                    .handleInput1
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            style={{
                                                                width: "100%"
                                                            }}
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            onChange={
                                                                this
                                                                    .handleInput2
                                                            }
                                                        />
                                                    </div>
                                                    <button
                                                        className="btn btn-secondary"
                                                        onClick={() =>
                                                            this.postLogin()
                                                        }
                                                    >
                                                        SignIn
                                                    </button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "is_login,user_name,email",
    actions
)(SignIn);

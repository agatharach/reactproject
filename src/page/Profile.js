import React from "react";
import swal from "sweetalert";
import { connect } from "unistore/react";
import { actions } from "../store";
import HeaderPostLogin from "../component/HeaderPostLogin";
import "./thumbs.svg";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        swal({
            title: "Welcome Weeaboo Pals!",
            text: `Enjoy ${this.props.user_name}`,
            icon: "success",
            button: "olrait!"
        });
        return (
            <div>
                <HeaderPostLogin />
                <div className="contain">
                    <div className="row d-flex align-items-center homeground">
                        <div className="col-12 align-self-center text-center">
                            <img
                                src="https://image.flaticon.com/icons/svg/145/145846.svg"
                                alt=""
                                width="400px"
                                height="300px"
                            />
                            <div>
                                <h3>Username : {this.props.user_name} </h3>
                                <br />
                                <h3>Email : {this.props.email}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "user_name,email",
    actions
)(Profile);

import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";

class Quotes extends React.Component {
    constructor(props) {
        super(props);
    }

    async getData() {
        const self = this;
        await axios.get(self.props.quoteUrl).then(function(response) {
            console.log(response);
            self.props.setQuote(response.data.quo);
        });
    }

    componentWillMount = () => {
        this.getData();
    };

    render() {
        return (
            <div>
                <h1>{this.props.quotes}</h1>
            </div>
        );
    }
}

export default connect(
    "quotes,quoteUrl",
    actions
)(Quotes);

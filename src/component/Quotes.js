import React from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      char: "",
      from: ""
    };
  }

  async getData() {
    const self = this;
    await axios.get(self.props.quoteUrl).then(function(response) {
      console.log(response);
      self.props.setQuote(response.data.quo);
      self.setState({ char: response.data.character });
      self.setState({ from: response.data.anime });
    });
  }

  componentWillMount = () => {
    this.getData();
  };

  render() {
    return (
      <div>
        <p style={{ fontSize: 30, color: "grey" }}>"{this.props.quotes}"</p>
        <span style={{ fontSize: 20, color: "grey" }}>{this.state.char} :</span>
        <span style={{ fontSize: 20, color: "grey" }}> {this.state.from}</span>
      </div>
    );
  }
}

export default connect(
  "quotes,quoteUrl",
  actions
)(Quotes);

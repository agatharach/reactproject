import React from "react";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
import axios from "axios";
// import Isi from "../components/Isi";

const bookUrl = "https://www.goodreads.com/search/index.xml";

export default class Coba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get(bookUrl, {
        headers: { "Access-Control-Allow-Origin": "*" },
        params: { key: "y1obKSI5hlBSWDILdLGMjg", q: "alchemist" }
      })
      .then(function(response) {
        self.setState({ hasil: response.data });
      })
      .catch(function(error) {
        console.log("ini error", error);
      });
  }

  render() {
    return (
      <div>
        {console.log(this.state.hasil)}
        <p>Baru nyoba ini.</p>
      </div>
    );
  }

  // var options = {
  //   method: 'GET',
  //   url: 'https://imdb8.p.rapidapi.com/title/get-top-stripe',
  //   qs: {currentCountry: 'US', purchaseCountry: 'US', tconst: 'tt0944947'},
  //   headers: {
  //     'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  //     'x-rapidapi-key': '5bef724956mshf828a54cc63f080p14173fjsn395c6c20eb47'
  //   }
}

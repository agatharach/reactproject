import React from "react";
import HeaderPostLogin from "./../component/HeaderPostLogin";
import ScrollBar from "./../component/ScrollBar";
import axios from "axios";

class Anime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      samping: [
        { link: "/anime/1", genre: "Action" },
        { link: "/anime/14", genre: "Horror" },
        { link: "/anime/24", genre: "Sci-fi" },
        { link: "/anime/22", genre: "Romance" },
        { link: "/anime/8", genre: "Drama" },
        { link: "/anime/4", genre: "Comedy" }
      ],
      headline: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get("https://api.jikan.moe/v3/search/anime?order_by=score")
      .then(function(response) {
        self.setState({ headline: response.data.results });
        console.log(self.headline);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let rapikan = this.state.headline.map((elm, key) => {
      return (
        <div className="row" style={{ marginTop: 5 }}>
          <div className="col-md-4">
            <img src={elm.image_url} />
          </div>
          <div className="col-md-8">
            <a href={elm.url}>{elm.title}</a>
            <p>{elm.score}</p>
            <p>{elm.synopsis}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <HeaderPostLogin />
        <div className="container">
          <div className="row">
            <div className="col-md-2 scroll_bar">
              <ScrollBar isi={this.state.samping} />
            </div>
            <div className="col-md-10">{rapikan}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Anime;
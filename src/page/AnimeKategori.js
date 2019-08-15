import React from "react";
import HeaderPostLogin from "./../component/HeaderPostLogin";
import ScrollBar from "./../component/ScrollBar";
import axios from "axios";

class AnimeCategory extends React.Component {
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
      headline: [],
      keyword: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    let cari = e.target.value;
    this.setState({ keyword: cari });
  }

  handleSearch(e) {
    e.preventDefault();
    let self = this;
    axios
      .get(
        "https://api.jikan.moe/v3/search/anime?q=" +
          self.state.keyword +
          "genre=" +
          self.props.match.params.genre
      )
      .then(function(response) {
        self.setState({ headline: response.data.results });
        console.log(self.headline);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    const self = this;
    axios
      .get(
        "https://api.jikan.moe/v3/search/anime?genre=" +
          self.props.match.params.genre +
          "&order_by=score"
      )
      .then(function(response) {
        self.setState({ headline: response.data.results });
        console.log(self.headline);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      const self = this;
      axios
        .get(
          "https://api.jikan.moe/v3/search/anime?genre=" +
            this.props.match.params.genre +
            "&order_by=score"
        )
        .then(function(response) {
          self.setState({ headline: response.data.results });
          console.log(self.headline);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

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
              <form>
                <input type="text" onChange={this.handleInput} />
                <button onClick={this.handleSearch}>search</button>
              </form>
            </div>
            <div className="col-md-10">{rapikan}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimeCategory;

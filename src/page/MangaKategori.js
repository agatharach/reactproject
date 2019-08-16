import React from "react";
import HeaderPostLogin from "./../component/HeaderPostLogin";
import ScrollBar from "./../component/ScrollBar";
import axios from "axios";
import "./../asset/css/header.css";
class MangaCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      samping: [
        { link: "/manga/1", genre: "Action" },
        { link: "/manga/14", genre: "Horror" },
        { link: "/manga/24", genre: "Sci-fi" },
        { link: "/manga/22", genre: "Romance" },
        { link: "/manga/8", genre: "Drama" },
        { link: "/manga/4", genre: "Comedy" }
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
        "https://api.jikan.moe/v3/search/manga?q=" +
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
        "https://api.jikan.moe/v3/search/manga?genre=" +
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
          "https://api.jikan.moe/v3/search/manga?genre=" +
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
        <div
          className="row"
          style={{
            marginTop: 5,
            boxShadow: " 2px 2px 2px 2px #888888",
            padding: 5
          }}
        >
          <div className="col-md-4">
            <img src={elm.image_url} />
          </div>
          <div className="col-md-8">
            <a href={elm.url} style={{ fontWeight: 700, fontSize: 20 }}>
              {elm.title}
            </a>
            <p>{elm.score}</p>
            <p>{elm.synopsis}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <HeaderPostLogin />
        <div className="container" style={{ marginTop: 15 }}>
          <div className="row">
            <div
              className="col-md-6"
              style={{
                position: "sticky",
                top: 0,
                backgroundColor: "white",
                zIndex: 2
              }}
            >
              <ScrollBar isi={this.state.samping} />
            </div>
            <div
              className="col-md-6 search"
              style={{
                position: "sticky",
                top: 0,
                backgroundColor: "white",
                zIndex: 1
              }}
            >
              <form className="float-right">
                <input
                  type="text"
                  onChange={this.handleInput}
                  style={{ width: 180 }}
                />
                <button
                  onClick={this.handleSearch}
                  className="btn-primary"
                  style={{
                    backgroundColor: "#6fc9ff",
                    borderRadius: 6,
                    borderColor: "#6fc9ff"
                  }}
                >
                  search
                </button>
              </form>
            </div>
            <div className="col-md-12">{rapikan}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MangaCategory;

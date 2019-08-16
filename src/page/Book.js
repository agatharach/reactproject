import React from "react";
import axios from "axios";
import HeaderPostLogin from "./../component/HeaderPostLogin";

const bookUrl = "https://www.goodreads.com/search/index.xml";
const parser = new DOMParser();

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: {
        judul: [],
        penulis: [],
        tahun_terbit: [],
        rating: [],
        gambar: [],
        keyword: ""
      }
    };
  }

  parsingXML = (doc, tags, posisi) => {
    const xmlDoc = parser.parseFromString(doc, "text/xml");
    const listSementara = xmlDoc.getElementsByTagName(tags);
    const listHasil = [];
    for (let index = 0; index < listSementara.length; index++) {
      listHasil[index] = listSementara[index].childNodes[posisi].nodeValue;
    }
    return listHasil;
  };

  handleInput(e) {
    e.preventDefault();
    let cari = e.target.value;
    this.setState({ keyword: cari });
  }

  handleSearch(e) {
    e.preventDefault();
    let self = this;
    axios
      .get(bookUrl, {
        params: { key: "y1obKSI5hlBSWDILdLGMjg", q: self.state.keyword }
      })
      .then(function(response) {
        self.setState({
          hasil: {
            judul: self.parsingXML(response.data, "title", 0),
            penulis: self.parsingXML(response.data, "name", 0),
            tahun_terbit: self.parsingXML(
              response.data,
              "original_publication_year",
              0
            ),
            rating: self.parsingXML(response.data, "average_rating", 0),
            gambar: self.parsingXML(response.data, "image_url", 0)
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    const self = this;
    axios
      .get(bookUrl, {
        params: { key: "y1obKSI5hlBSWDILdLGMjg", q: "alchemist" }
      })
      .then(function(response) {
        self.setState({
          hasil: {
            judul: self.parsingXML(response.data, "title", 0),
            penulis: self.parsingXML(response.data, "name", 0),
            tahun_terbit: self.parsingXML(
              response.data,
              "original_publication_year",
              0
            ),
            rating: self.parsingXML(response.data, "average_rating", 0),
            gambar: self.parsingXML(response.data, "image_url", 0)
          }
        });
      })
      .catch(function(error) {
        console.log("ini error", error);
      });
  }

  text = "";
  fungsi = jumlah => {
    for (let i = 0; i < jumlah; i++) {
      this.text += this.state.hasil[i];
    }
    return this.text;
  };

  render() {
    return (
      <div>
        <HeaderPostLogin />
        <div className="container">
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
          <div className="row justify-contennt-center">
            <div className="col-md-4">
              {this.state.hasil.judul.map((value, index) => {
                return (
                  <div
                    class="card m-2"
                    style={{ width: "18rem", "border radius": "5px" }}
                  >
                    <img
                      src={this.state.hasil.gambar[index]}
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h3 class="card-title">{value}</h3>
                      <p class="card-text">
                        Penulis : {this.state.hasil.penulis[index]}
                      </p>
                      <p class="card-text">
                        Tahun Terbit : {this.state.hasil.tahun_terbit[index]}
                      </p>
                      <p class="card-text">
                        Rating : {this.state.hasil.rating[index]}
                      </p>
                      {/* <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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

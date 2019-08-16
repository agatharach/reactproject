import React from "react";
import axios from "axios";

const bookUrl = "https://www.goodreads.com/search/index.xml";
const parser = new DOMParser();

export default class Coba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: {
        judul: [],
        penulis: [],
        tahun_terbit: [],
        rating: [],
        gambar: []
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
        <p>Baru nyoba ini.</p>
          {this.state.hasil.judul.map((value, index) => {
            return (
              <div>
                <img src={this.state.hasil.gambar[index]} />
                <h3>Judul : {value}</h3>
                <h4>Penulis : {this.state.hasil.penulis[index]}</h4>
                <h4>Tahun Terbit : {this.state.hasil.penulis[index]}</h4>
                <h4>Rating : {this.state.hasil.tahun_terbit[index]}</h4>                
              </div>
            );
          })}
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

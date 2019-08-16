import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "unistore/react";
import { store } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderPostLogin from "./component/HeaderPostLogin";
import HeaderPraLogin from "./component/HeaderPraLogin";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Profile from "./page/Profile";
import Anime from "./page/Anime";
import AnimeKategori from "./page/AnimeKategori";
import Coba from "./page/coba";
import Manga from "./page/Manga";
import MangaKategori from "./page/MangaKategori";
import NotFound from "./page/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/anime" component={Anime} />
          <Route path="/anime/:genre" component={AnimeKategori} />
          <Route path="/books" component={Coba} />
          <Route exact path="/manga" component={Manga} />
          <Route path="/manga/:genre" component={MangaKategori} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;

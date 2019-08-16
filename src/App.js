import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "unistore/react";
import { store } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderPostLogin from "./component/HeaderPostLogin";
import HeaderPraLogin from "./component/HeaderPraLogin";
import Home from "./page/Home";
import Anime from "./page/Anime";
import AnimeKategori from "./page/AnimeKategori";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/post" component={HeaderPostLogin} />
          <Route exact path="/pra" component={HeaderPraLogin} />
          <Route exact path="/" component={Home} />
          <Route exact path="/anime" component={Anime} />
          <Route path="/anime/:genre" component={AnimeKategori} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

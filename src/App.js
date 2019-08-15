import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderPostLogin from "./component/HeaderPostLogin";
import HeaderPraLogin from "./component/HeaderPraLogin";
import Home from "./page/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/post" component={HeaderPostLogin} />
                <Route exact path="/pra" component={HeaderPraLogin} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

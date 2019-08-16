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

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/post" component={HeaderPostLogin} />
                    <Route exact path="/pra" component={HeaderPraLogin} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

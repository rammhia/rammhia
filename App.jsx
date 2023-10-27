import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Electronic from "./Electronic";
//import { Link, NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" exact Component={Home} />
          <Route path="/" exact Component={Home} />
          <Route path="/Home" exact Component={Home} />
          <Route path="/Login" exact Component={Login} />
          <Route path="/SignUp" exact Component={SignUp} />
          <Route path="/Men" exact Component={Men} />
          <Route path="/Women" exact Component={Women} />
          <Route path="/Kids" exact Component={Kids} />
          <Route path="/Electronic" exact Component={Electronic} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    );
  }
}

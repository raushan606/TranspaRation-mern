import React, { Component } from "react";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";

import { PrivateRoute } from "./PrivateRoute";
import Landing from "./components/Landing";

export default class App extends Component {
  check = () => {
    if (localStorage.token) {
      return true;
    }
    return false;
  };
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/login"
            render={() => (this.check() ? <Redirect to="/view" /> : <Login />)}
          />
          <Route exact path="/add" component={Add} />
          <Switch>
            {/* <PrivateRoute exact path="/add" component={Add} /> */}
            <PrivateRoute exact path="/view" component={View} />
          </Switch>
        </>
      </Router>
    );
  }
}

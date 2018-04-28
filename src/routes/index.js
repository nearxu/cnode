import React, { Component } from "react";
import { browserHistory, Route, IndexRoute, Router } from "react-router";

import Index from "../components/index";
import SignIn from "../components/signin";
import SignOut from "../components/signout";

const Roots = ({ children }) => <div>{children}</div>;

const RouteConfig = (
  <Router history={browserHistory}>
    <Route path="/" component={Roots}>
      <IndexRoute component={Index} />
      <Route path="signin" component={SignIn} />
      <Route path="signout" component={SignOut} />
    </Route>
  </Router>
);

export default RouteConfig;

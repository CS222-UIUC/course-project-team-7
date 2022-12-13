/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import SignIn from "views/examples/SignInPage.js";

import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Band1Page from "views/examples/Band1Page.js";
import Band2Page from "views/examples/Band2Page.js";
import Band3Page from "views/examples/Band3Page.js";
import Band4Page from "views/examples/Band4Page.js";
import Searcher from "views/examples/Searcher.js";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /><Route
      path="/band1-page"
      render={(props) => <Band1Page {...props} />}
      /><Route
      path="/band2-page"
      render={(props) => <Band2Page {...props} />}
      /><Route
      path="/band3-page"
      render={(props) => <Band3Page {...props} />}
      /><Route
      path="/band4-page"
      render={(props) => <Band4Page {...props} />}
      /><Route
      path="/signin-page"
      render={(props) => <SignIn {...props} />}
      /><Route
      path="/searcher-page"
      render={(props) => <Searcher {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);

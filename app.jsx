import React, { Component } from "react";
import { render } from "react-dom";

import Navbar from "./components/common/navbar";

import Footer from "./components/footer";
import SearchAppBar from "./components/searchnavbar";
import HomePage  from "./components/Home/HomePage";


import Signup from "./components/login/Signup";
import Login from "./components/login/login";
import Properties from "./components/properties/properties";

//resources
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      welcome: "Find a new home"
    };
  }

  render() {
    return (
      <div>
      <div className='wrapper-box'>
        <Navbar user={{username: "jean Pierre"}} />
        <Switch>
          
          <Route exact path="/">
          <HomePage />
          </Route>


          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/lists">
            <Properties/>
          </Route>

          <Route><h1>Oops! Page not Foud</h1></Route>
        </Switch>

       
      </div>
       <Footer />
      </div>
    );
  }
}

export default App;

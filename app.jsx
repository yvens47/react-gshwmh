import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Navbar from "./components/navbar";
import Property from "./components/property";
import Footer from "./components/footer";

import Signup from "./components/login/Signup";
import Login from "./components/login/login";
//resources
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SearchAppBar from "./components/searchnavbar";
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
        <Navbar />
        <Router>
          
          <Route exact path="/">
            <div className="map">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 p-5 mt-5 m-auto">
                    <div class="welcome-wrapper mt-5 p-5">
                      <Hello welcome={this.state.welcome} />
                      <p>Start editing to see some magic happen :)</p>
                      <form>
                        <div class="form-row">
                          <div class="col-7">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="City,zip, state"
                            />
                          </div>
                          <div class="col">
                            <button
                              type="button"
                              class="btn btn-secondary btn-lg"
                            >
                              Go
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner  pt-5 pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            className=""
                            src="https://cdn3.iconfinder.com/data/icons/hotel-services-4/64/23_map_location-512.png"
                          />

                          <h2>Heading</h2>
                          <p>
                            Donec sed odio dui. Etiam porta sem malesuada magna
                            mollis euismod.
                          </p>
                        </div>

                        <div className="col-sm-4">
                          <img
                            className=""
                            src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Email_Contact-512.png"
                          />

                          <h2>Heading</h2>
                          <p>
                            Donec sed odio dui. Etiam porta sem malesuada magna
                            mollis euismod.
                          </p>
                        </div>

                        <div className="col-sm-4">
                          <div className="wrapper">
                            <img
                              className=""
                              src="https://cdn3.iconfinder.com/data/icons/hotel-services-4/64/23_map_location-512.png"
                            />
                          </div>

                          <h2>Heading</h2>
                          <p>
                            Donec sed odio dui. Etiam porta sem malesuada magna
                            mollis euismod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="properties pt-3 pb-3">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 m-auto pb-5 pt-5">
                    <h1 className="text-center">Featured Properties</h1>
                    <p className="text-center">See our best properties</p>
                  </div>

                  <div className="col-md-3">
                    <Property
                      property={{ type: "House" }}
                      imageUrl="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </div>

                  <div className="col-md-3">
                    <Property
                      property={{ type: "Apartment" }}
                      imageUrl="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </div>

                  <div className="col-md-3">
                    <Property
                      property={{ type: "House" }}
                      imageUrl="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </div>

                  <div className="col-md-3">
                    <Property
                      property={{ type: "TownHome" }}
                      imageUrl="https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Route>


          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Router>

       
      </div>
       <Footer />
      </div>
    );
  }
}

export default App;

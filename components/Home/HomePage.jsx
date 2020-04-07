import React  from "react";
import Properties from "../properties/properties";
import Property from "../property";

const HomePage  =  () =>{


  return (
    <div> 
     <div className="map">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 p-5 mt-5 m-auto">
                    <div class="welcome-wrapper mt-5 p-5">
                     <h1>Welcome To EstateC </h1>
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
            
            
             </div>
  )
}


export default HomePage;
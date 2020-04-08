import React, { Component } from "react";
import axios from "axios";
import Property from "./property";
import PropertySlide from "./PropertySlide";


class Properties extends React.Component {
  state = {
    lists: []
  };
  componentDidMount = () => {
    axios
      .get("https://next.json-generator.com/api/json/get/VyssUUc4O")
      .then(response => {
        // handle success

        this.setState({ lists: response.data.products });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };
  render() {
   
    return (
      <div>
        <div className="map_list">
        <div className="container">
          <div className="row mt-5">
            <div className='col-md-12 mt-5'><h1>hello world</h1> </div>
          </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
          <div className='col-md-8'>
          <PropertySlide />
          
          </div>
            <div className="col-md-4">
              <div className='filter-box container mb-2 border border-primary'>
                 <div className="row p-0">
                    <div className='col-md-12'>

                    <form>
                      <div className="form-row">
                        <div className="col">
                          <input type="text" className="form-control" placeholder="First name"/>
                        </div>
                        <div className="col">
                          <label for="exampleFormControlSelect1">Example select</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>All</option>
                          <option>Rent</option>
                          <option>House</option>
                          <option>TownHome</option>
                          <option>Condos</option>
                        </select>
                                            </div>
                      </div>
                    </form>
                    
                    
                    </div>
                 </div>
              </div>
              {this.state.lists.map(property => (
                <li>
                  <Property property={property} />{" "}
                </li>
              ))}
            </div>
            <div className="col-md-3"> Search </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Properties;

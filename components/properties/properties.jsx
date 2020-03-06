import React, { Component } from "react";
import axios from "axios";
import Property from "./property";

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
    console.log(this.state.lists);
    return (
      <div>
        <div className="map_list">sffs</div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-9">
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

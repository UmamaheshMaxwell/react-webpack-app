import React, { Component } from "react";
import { Consumer } from "../context";

class City extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          const { city, country } = context;
          return (
            <p style={{ fontFamily: "tahoma" }}>
              <span style={{ color: "red" }}>*</span>
              <span style={{ color: "blue" }}>
                All are from {city} and country is {country}
              </span>
            </p>
          );
        }}
      </Consumer>
    );
  }
}

export default City;

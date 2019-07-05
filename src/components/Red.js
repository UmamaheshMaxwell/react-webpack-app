import React, { Component } from "react";

import Blue from "./Blue";
import { Consumer } from "../context";

class Red extends Component {
  render() {
    return (
      <div style={{ fontFamily: "tahoma" }}>
        <h5 style={{ color: "red" }}>
          Pincode for green component is {this.props.pincode}
        </h5>
        <Blue pincode={this.props.pincode} />
      </div>
    );
  }
}

export default Red;

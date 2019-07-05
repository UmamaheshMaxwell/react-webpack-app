import React, { Component } from "react";
import { Consumer } from "../context";

class Green extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 style={{ color: "green" }}>
          Pincode coming from red via blue component is {this.props.pincode}
        </h5>
      </React.Fragment>
    );
  }
}

export default Green;

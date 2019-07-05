import React, { Component } from "react";
import Green from "./Green";

class Blue extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 style={{ color: "blue" }}>Pincode passing to green component</h5>
        <Green pincode={this.props.pincode} />
      </React.Fragment>
    );
  }
}

export default Blue;

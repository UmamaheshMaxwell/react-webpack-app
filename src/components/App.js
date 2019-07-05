import React, { Component } from "react";
import Users from "./Users";
import { Provider } from "../context";

import "bootstrap/dist/css/bootstrap.min.css";
import City from "./City";
import Red from "./Red";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <h1 style={{ fontFamily: "tahoma" }}>My First React App</h1>
          <br />
          <h3>
            <u>Passing data via Context API</u>
          </h3>
          <br />
          <Users />
          <br />
          <City />
          <br />
          <div>
            <br />
            <h3>
              <u>Passing data via props</u>
            </h3>
            <br />
            <Red pincode="100000" />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

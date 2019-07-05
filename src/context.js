import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Umesh",
        age: 37
      },
      {
        id: 2,
        name: "Swathi",
        age: 37
      },
      {
        id: 3,
        name: "Jagrav",
        age: 5
      }
    ],
    city: "Sydeny",
    country: "Australia",
    pincode: 100000
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

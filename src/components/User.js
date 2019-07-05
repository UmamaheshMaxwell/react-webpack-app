import React, { Component } from "react";

class User extends Component {
  render() {
    const { name, age } = this.props.user;
    return (
      <React.Fragment>
        <tbody>
          <tr style={{ fontFamily: "tahoma" }}>
            <td>{name}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </React.Fragment>
    );
  }
}

export default User;

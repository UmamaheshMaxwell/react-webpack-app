import React, { Component } from "react";

import { Consumer } from "../context";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          const { users } = context;
          return (
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <React.Fragment>
                {users.map(user => (
                  <User key={user.id} user={user} />
                ))}
              </React.Fragment>
            </table>
          );
        }}
      </Consumer>
    );
  }
}

export default Users;

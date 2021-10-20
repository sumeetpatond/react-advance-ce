/* eslint-disable require-jsdoc */
import React from "react";
import UserContext from "./UserContext";

class ContextChild2 extends React.Component {
  static contextType = UserContext;
  render() {
    return this.context ? <div>Welcome, {this.context}</div> : null;
  }
}

// ContextChild2.contextType = UserContext;

export default ContextChild2;

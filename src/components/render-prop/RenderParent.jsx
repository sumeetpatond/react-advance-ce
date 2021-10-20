/* eslint-disable react/prop-types */
/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import { Component } from "react";

class RenderParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return this.props.render(this.state.count, this.handleClick);
  }
}

export default RenderParent;

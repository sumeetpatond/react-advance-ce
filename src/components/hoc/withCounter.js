/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */

import React from "react";

const withCounter = (WrappedComponent, incrementBy = 1) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementBy };
      });
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          count={count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;

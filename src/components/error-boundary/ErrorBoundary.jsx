/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log({ error, info });
  }

  render() {
    console.log(`state`, this.state);
    return this.state.hasError ? <div>Error Catched</div> : this.props.children;
  }
}

export default ErrorBoundary;

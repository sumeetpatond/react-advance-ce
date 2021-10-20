/* eslint-disable react/prop-types */
import withCounter from "./withCounter";

const HocChild2 = function ({ count, incrementCount }) {
  return <label onMouseOver={incrementCount}>Hover Count is: {count}</label>;
};

export default withCounter(HocChild2);

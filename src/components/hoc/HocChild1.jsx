/* eslint-disable react/prop-types */
import withCounter from "./withCounter";

const HocChild1 = function ({ count, incrementCount, a }) {
  return <button onClick={incrementCount}>Clicked Count is: {count}</button>;
};

export default withCounter(HocChild1, 2);

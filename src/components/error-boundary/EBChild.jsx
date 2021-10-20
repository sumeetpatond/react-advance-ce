const EBChild = function () {
  throw Error("to test error boundary");
  return <div>Hello</div>;
};

export default EBChild;

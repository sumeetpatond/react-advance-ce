import "./App.css";
import ContextParent from "./components/context/ContextParent";
import EBChild from "./components/error-boundary/EBChild";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import HocChild1 from "./components/hoc/HocChild1";
import HocChild2 from "./components/hoc/HocChild2";
import Portal from "./components/portal/Portal";
import RenderParent from "./components/render-prop/RenderParent";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <ContextParent />
      <br />
      <RenderParent
        render={(count, incrementCount) => (
          <button onClick={incrementCount}>Click Count is: {count}</button>
        )}
      />
      <br />
      <RenderParent
        render={(count, incrementCount) => (
          <label onMouseOver={incrementCount}>Hover Count is: {count}</label>
        )}
      />
      <br />
      <HocChild1 />
      <br />
      <HocChild2 />
      <br />
      <ErrorBoundary>
        <EBChild />
      </ErrorBoundary>
      <Portal />
    </div>
  );
}

export default App;

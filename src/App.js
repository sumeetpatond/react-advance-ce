import "./App.css";
import ContextParent from "./components/context/ContextParent";
import RenderParent from "./components/render-prop/RenderParent";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <ContextParent />
      <br />
      <RenderParent
        render={(count, handleClick) => (
          <button onClick={handleClick}>{count}</button>
        )}
      />
      <RenderParent
        render={(count, handleClick) => (
          <label onClick={handleClick}>{count}</label>
        )}
      />
    </div>
  );
}

export default App;

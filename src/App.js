import CounterView from "./features/counter/CounterView.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="box">
        <h1 className="main__heading">Counter App</h1>
        <CounterView />
      </div>
    </>
  );
}

export default App;

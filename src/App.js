import "./App.css";
import Header from "./component/Header/Header";
import Expectation from "./component/Exp-Rel/Expectation";
import Chart from "./component/Chart/Chart.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Expectation></Expectation>
      <Chart></Chart>
    </div>
  );
}

export default App;

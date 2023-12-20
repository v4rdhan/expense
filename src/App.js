import "./App.css";
import Header from "./component/Header/Header";
import Expectation from "./component/Exp-Rel/Expectation";
import Chart from "./component/Chart/Chart.js";
import { useState } from "react";

function App() {
  const [expectationValue, setExpectationValue] = useState(0);
  return (
    <div className="App">
      <Header></Header>
      <Expectation
        expectationValue={expectationValue}
        setExpectationValue={setExpectationValue}
      ></Expectation>
      <Chart
        expectationValue={expectationValue}
        setExpectationValue={setExpectationValue}
      ></Chart>
    </div>
  );
}

export default App;

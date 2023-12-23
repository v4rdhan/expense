import "./App.css";
import Header from "./component/Header/Header";
import Expectation from "./component/Exp-Rel/Expectation";
import Chart from "./component/Chart/Chart.js";
import { useState } from "react";
import { labels } from "./constants/constants.js";

function App() {
  const [expectationValue, setExpectationValue] = useState(0);
  const [expenseValues, setExpenseValues] = useState([]);
  const months = labels;
  return (
    <div className="App">
      <Header></Header>
      <Expectation
        expectationValue={expectationValue}
        setExpectationValue={setExpectationValue}
        // months={months}
      ></Expectation>
      <Chart
        expectationValue={expectationValue}
        setExpectationValue={setExpectationValue}
        months={months}
      ></Chart>
    </div>
  );
}

export default App;

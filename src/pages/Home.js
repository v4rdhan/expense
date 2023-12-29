import React from 'react';
import Header from "../component/Header/Header";
import Expectation from "../component/Exp-Rel/Expectation";
import Chart from "../component/Chart/Chart.js";
import { useState } from "react";
import { labels } from "../constants/constants.js";

export default function Home() {
    const [expectationValue, setExpectationValue] = useState(0);
  const [expenseValues, setExpenseValues] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const Labels = labels;
  return (
    <div className='home'>
      <Header
        Labels={Labels}
        expenseValues={expenseValues}
        setExpenseValues={setExpenseValues}
      ></Header>
      <Expectation
        expectationValue={expectationValue}
        setExpectationValue={setExpectationValue}
        // months={months}
      ></Expectation>
      <Chart
        expectationValue={expectationValue}
        setExpectationValue={setExpectationValue}
        expenseValues={expenseValues}
        // Labels={Labels}
      ></Chart>
    </div>
  )
}

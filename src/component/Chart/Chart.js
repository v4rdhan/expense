import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";
import { labels } from "../../constants/constants";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function Chart({
  expectationValue,
  setExpectationValue,
  expenseValues,
  // Labels,
}) {
  function getExpectationArray(number) {
    let s = number / 13;
    let array = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i <= 13; i++) {
      array[i] = i * s;
    }
    return array;
  }

  // const labels = {
  //   month: [
  //   ],
  // };x
  const data = {
    labels: labels.Months.map((e) => e.label),

    datasets: [
      {
        label: "Expectation",
        data: getExpectationArray(expectationValue),
        backgroundColor: "#005291",
        borderColor: "#005291",
        pointBorderColor: "#0091ff",
        borderWidth: 5,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Reality",
        data: expenseValues,
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        pointBorderColor: "#FF0000",
        borderWidth: 5,
        fill: true,
        tension: 0.4,
      },
    ],
  };
  console.log(labels.Months[0].name);
  const options = {
    Plugin: {
      legend: true,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div id="chaertMian">
      <div id="chartCSS">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

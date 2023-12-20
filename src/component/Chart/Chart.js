import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

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

export default function Chart({ expectationValue, setExpectationValue }) {
  function getExpectationArray(number) {
    let s = number / 12;
    let array = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i <= 12; i++) {
      array[i] = i * s;
    }
    return array;
  }

  const labels = {
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  };
  const data = {
    labels: labels.month,
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
        data: getExpectationArray(10),
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        pointBorderColor: "#FF0000",
        borderWidth: 5,
        fill: true,
        tension: 0.4,
      },
    ],
  };
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

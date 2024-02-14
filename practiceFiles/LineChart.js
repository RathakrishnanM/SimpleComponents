// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import CompanyData from "./Company.json";

const LineChart = () => {
  const dates = CompanyData.map((item) => item.date);
  const revenues = CompanyData.map((item) => item.revenue);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Company Revenue based on Dates",
        data: revenues,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;

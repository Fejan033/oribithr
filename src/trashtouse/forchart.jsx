import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const LeaveBalanceChart = () => {
  // Dataset representing leave balances
  const data = {
    labels: ["PL", "CL"],  // Labels for the two leave types
    datasets: [
      {
        label: "Leave Balance",
        backgroundColor: "rgba(75, 192, 192, 0.6)",  // Color for PL (Paid Leave)
        data: [12, 8], // Replace with actual values for PL and CL leave balance
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
        },
        anchor: "end",
        align: "top",
      },
      legend: {
        position: "top",
        labels: {
          boxHeight: 10,
          boxWidth: 10,
        },
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Leave Balance",  // Y-axis label for leave balance
        },
      },
      x: {
        title: {
          display: true,
          text: "Leave Type",  // X-axis label for PL and CL
        },
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <Bar data={data} plugins={[ChartDataLabels]} options={options} />
    </div>
  );
};

export default LeaveBalanceChart;

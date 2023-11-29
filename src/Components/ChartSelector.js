import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
Chart.register(...registerables);

export default function ChartSelector({ chartData, currentLocation }) {
  console.log(currentLocation);

  let chatComponent;
  const options = {
    scales: {
      x: {
        grid: {
          color: "grey", // Change X axis grid color
        },
        ticks: {
          color: "white", // Change X axis ticks color
        },
      },
      y: {
        grid: {
          color: "grey", // Change Y axis grid color
        },
        ticks: {
          color: "white", // Change Y axis ticks color
        },
      },
    },
  };
  switch (currentLocation) {
    case "/Analysis/1": {
      console.log("HERE1");
      chatComponent = <Line data={chartData} options={options} />;
      break;
    }
    case "/Analysis/2": {
      console.log("HERE2", chartData);
      chatComponent = <Line data={chartData} options={options} />;
      break;
    }
    case "/Analysis/3": {
      console.log("HERE3", chartData);
      chatComponent = (
        <div>
          <Line data={chartData.chartDataOne} options={options} />
          <Line data={chartData.chartDataTwo} options={options} />
        </div>
      );
      break;
    }
    case "/Analysis/4": {
      console.log("HERE4", chartData);
      chatComponent = (
        <div>
          <Bar data={chartData.chartDataOne} options={options} />
          <Line data={chartData.chartDataTwo} options={options} />
        </div>
      );
      break;
    }
    case "/Analysis/5": {
      console.log("HERE5", chartData);
      chatComponent = (
        <div>
          <Bar data={chartData.chartDataOne} options={options} />;
          <Line data={chartData.chartDataTwo} options={options} />
        </div>
      );
      break;
    }
    case "/Analysis/6": {
      console.log("HERE6", chartData);
      chatComponent = (
        <div>
          <Line data={chartData.chartDataOne} options={options} />
          <Bar data={chartData.chartDataTwo} options={options} />;
        </div>
      );
      break;
    }
  }

  return <div>{chatComponent}</div>;
}

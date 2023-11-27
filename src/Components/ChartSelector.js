import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
Chart.register(...registerables);

export default function ChartSelector({ chartData, currentLocation }) {
  console.log(currentLocation);

  let chatComponent;

  switch (currentLocation) {
    case "/Analysis/1": {
      console.log("HERE1");
      chatComponent = <Line data={chartData} />;
      break;
    }
    case "/Analysis/2": {
      console.log("HERE2",chartData);
      chatComponent = <Line data={chartData} />;
      break;
    }
    case "/Analysis/3": {
      console.log("HERE3", chartData);
      chatComponent = (
        <div>
          <Line data={chartData.chartDataOne} />
          <Line data={chartData.chartDataTwo} />
        </div>
      );
      break;
    }
    case "/Analysis/4": {
      console.log("HERE4", chartData);
      chatComponent = (
        <div>
          <Line data={chartData.chartDataOne} />
          <Line data={chartData.chartDataTwo} />
        </div>
      );
      break;
    }
  }

  return <div>{chatComponent}</div>;
}

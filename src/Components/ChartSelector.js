import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
Chart.register(...registerables);

export default function ChartSelector({ chartData, currentLocation }) {
  console.log(currentLocation);

  let chatComponent;

  switch (currentLocation) {
    case "/Analysis/1": {
      console.log("HERE");
      chatComponent = <Line data={chartData} />;
    }
    case "/Analysis/3": {
      console.log("HERE", chartData);
      chatComponent = (
        <div>
          <Line data={chartData.chartDataOne} />
          <Line data={chartData.chartDataTwo} />
        </div>
      );
    }
  }

  return <div>{chatComponent}</div>;
}

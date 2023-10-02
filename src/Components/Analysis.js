import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Button from "@mui/material/Button";
Chart.register(...registerables);

export default function Analysis({ chartData }) {
  console.log(chartData);
  const [isBarChart, setChanged] = useState(true);
  const switchGraphType = (event) => {
    console.log("clicked" + isBarChart);
    setChanged(!isBarChart);
  };
  return (
    <div>
      <div className="graphDimen" >
        {isBarChart ? <Bar data={chartData} /> : <Line data={chartData} />}
        <div className="switchBtn">
          <Button variant="contained" value="Click" onClick={switchGraphType}>
            {isBarChart ? "View Line Chart" : "View Bar Chart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

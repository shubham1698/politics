import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import QueryParamSelector from "./QueryParamSelector";
import Status from "./Status";
Chart.register(...registerables);

export default function Analysis({ chartData }) {
  console.log(chartData);

  const [isBarChart, setChanged] = useState(true);

  const switchGraphType = (event) => {
    console.log("clicked" + isBarChart);
    setChanged(!isBarChart);
  };

  const minYear = dayjs("1990-01-01");
  const maxYear = dayjs("2023-01-01");

  const [dataRequestedState, setDataRequestedState] = useState(false);

  const onDataRequestedStateChange = () => {
    console.log(dataRequestedState)
    setDataRequestedState(!dataRequestedState);
  };

  return (
    <div>
      <QueryParamSelector
        minDate={minYear}
        maxDate={maxYear}
        dataRequestedState={dataRequestedState}
        onDataRequestedStateChange={onDataRequestedStateChange}
      />
      {!dataRequestedState ? (
        <Status currentStatus="Select the Parameter" />
      ) : (
        <div className="graphDimen">
          {isBarChart ? <Bar data={chartData} /> : <Line data={chartData} />}
          <div className="switchBtn">
            <Button variant="contained" value="Click" onClick={switchGraphType}>
              {isBarChart ? "View Line Chart" : "View Bar Chart"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

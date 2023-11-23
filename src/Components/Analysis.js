import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import QueryParamSelector from "./QueryParamSelector";
import Status from "./Status";
import { useLocation } from "react-router-dom";
Chart.register(...registerables);

export default function Analysis({ chartData }) {
  const location = useLocation();

  const [isBarChart, setChanged] = useState(true);

  const minYear = dayjs("1990-01-01");
  const maxYear = dayjs("2023-01-01");

  const [dataRequestedState, setDataRequestedState] = useState(false);

  const onDataRequestedStateChange = (isReadyToRequestData) => {
    console.log(dataRequestedState);
    if (isReadyToRequestData) {
      setDataRequestedState(!dataRequestedState);
    }
  };

  return (
    <div>
      <QueryParamSelector
        obj={{
          queryNumber: location.pathname,
          minDate: minYear,
          maxDate: maxYear,
          dataRequestedState: dataRequestedState,
          onDataRequestedStateChange: onDataRequestedStateChange,
        }}
      />

      {!dataRequestedState ? (
        <Status currentStatus="Select the Parameter" />
      ) : (
        <div className="graphDimen">
         <Line data={chartData} />
          <div className="switchBtn">
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import QueryParamSelector from "./QueryParamSelector";
import Status from "./Status";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ChartSelector from "./ChartSelector";
import { QueryOneAxios } from "../Axios/QueryOneAxios";
import { QueryThreeAxios } from "../Axios/QueryThreeAxios";

export default function Analysis() {
  const location = useLocation();
  const minYear = dayjs("1990-01-01");
  const maxYear = dayjs("2023-01-01");

  const [chartData, updateChartData] = useState({});

  const [dataRequestedState, setDataRequestedState] = useState(false);

  const onDataRequestedStateChange = (
    isReadyToRequestData,
    start_date,
    end_date,
    sector
  ) => {
    console.log(dataRequestedState);
    if (isReadyToRequestData) {
      console.log("Reacged");
      if (location == "/Analysis/1") {
        QueryOneAxios(start_date, end_date, sector)
          .then((response) => {
            updateChartData(response);
            console.log(response);
            setDataRequestedState(!dataRequestedState);
            console.log("After", dataRequestedState);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        QueryThreeAxios(start_date, end_date, sector)
          .then((response) => {
            updateChartData(response);
            console.log(response);
            setDataRequestedState(!dataRequestedState);
            console.log("After", dataRequestedState);
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
          <ChartSelector
            chartData={chartData}
            currentLocation={location.pathname}
          />
          <div className="switchBtn"></div>
        </div>
      )}
    </div>
  );
}

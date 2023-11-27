import React, { useState } from "react";
import dayjs from "dayjs";
import QueryParamSelector from "./QueryParamSelector";
import Status from "./Status";
import { useLocation } from "react-router-dom";
import ChartSelector from "./ChartSelector";
import { QueryOneAxios } from "../Axios/QueryOneAxios";
import { QueryThreeAxios } from "../Axios/QueryThreeAxios";
import { QueryFourAxios } from "../Axios/QueryFourAxios";
import { QueryTwoAxios } from "../Axios/QueryTwoAxios";

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
    console.log(location.pathname);
    if (isReadyToRequestData) {
      console.log("Reacged", location.pathname);
      if (location.pathname === "/Analysis/1") {
        QueryOneAxios(start_date, end_date, sector)
          .then((response) => {
            updateChartData(response);
            console.log(response);
            setDataRequestedState(!dataRequestedState);
            console.log("After 1", dataRequestedState);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (location.pathname === "/Analysis/4") {
        QueryFourAxios(start_date, end_date, sector)
          .then((response) => {
            updateChartData(response);
            console.log(response);
            setDataRequestedState(!dataRequestedState);
            console.log("After 4", dataRequestedState);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (location.pathname === "/Analysis/2") {
        console.log("statenmae--->",sector);
        QueryTwoAxios(sector)
          .then((response) => {
            updateChartData(response);
            console.log(response);
            setDataRequestedState(!dataRequestedState);
            console.log("After 2", dataRequestedState);
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
            console.log("After 3", dataRequestedState);
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

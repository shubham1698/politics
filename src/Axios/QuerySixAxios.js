import axios from "axios";
import { elements } from "chart.js";

export const QuerySixAxios = (start_date, end_date, state_name) => {
  return new Promise((resolve, reject) => {
    const queryParams = {
      start_date: start_date.year(),
      end_date: end_date.year(),
      state_name: state_name,
    };

    axios
      .get("http://127.0.0.1:5000/query6", { params: queryParams })
      .then((response) => {
        const data_array = response.data;
        console.log("Received data_array:", data_array);
        
          console.log("Received data_array:", data_array);
          console.log("Received data_array:", data_array.data_graph1);
          const chartDataOne = {
            labels: data_array.data_graph1?.map(
              (element) => element.YEAR + "(" + element.PRESIDENT_NAME + ")"
            ),
            datasets: [
              {
                label: "State Unemployment Rate",
                data: data_array.data_graph1?.map(
                  (element) => element?.STATE_AVG_UNEMPLOYMENT_RATE
                ),
              },
              {
                label: "USA Unemployment Rate",
                data: data_array.data_graph1?.map(
                  (element) => element?.COUNTRY_AVG_UNEMPLOYMENT_RATE_YEARTODATE
                ),
              },
            ],
          };
          console.log(chartDataOne);
          const chartDataTwo = {
            labels: data_array.data_graph2?.map((element) => element.YEAR),
            datasets: [
              {
                label: "Democrat Party",
                data: data_array.data_graph2?.map(
                  (element) => element?.DEMOCRAT_VOTE_PERCENTAGE
                ),
              },
              {
                label: "Republican Party",
                data: data_array.data_graph2?.map(
                  (element) => element?.REPUBLICAN_VOTE_PERCENTAGE
                ),
              },
            ],
          };

          console.log(chartDataTwo);

          resolve({ chartDataOne, chartDataTwo }); // Resolve with the value you want to return
        
      })
      .catch((err) => {
        console.log("error->", err);
        reject(err); // Reject with the error
      });
  });
};

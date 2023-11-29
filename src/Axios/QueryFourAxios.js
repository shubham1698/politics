import axios from "axios";

export const QueryFourAxios = (start_date, end_date, state_name) => {
  return new Promise((resolve, reject) => {
    const queryParams = {
      start_date: start_date.year(),
      end_date: end_date.year(),
      state_name: state_name,
    };

    axios
      .get("http://127.0.0.1:5000/query4", { params: queryParams })
      .then((response) => {
        console.log(response.data);
        const candidate_data = response.data.data_graph1;
        const winnerArray = [];
        const loserArray = [];

        candidate_data.forEach((element) => {
          if (element.WINNER === "Y") {
            winnerArray.push(element);
          } else {
            loserArray.push(element);
          }
        });
        const chartDataOne = {
          labels: candidate_data?.map((element) => {
            return element.YEAR;
          }),
          datasets: [
            {
              label: "Winning Candidate Popular Percentage",
              data: winnerArray?.map(
                (element) => element?.POPULAR_VOTE_PERCENTAGE
              ),
            },
            {
              label: "Losing Candidate Popular Percentage",
              data: loserArray?.map(
                (element) => element?.POPULAR_VOTE_PERCENTAGE
              ),
            },
          ],
        };

        const chart_two_data = response.data.data_graph2;
        console.log("checking-->", chart_two_data);
        const commercialExportArray = [];
        const merchantExportArray = [];
        const commercialImportArray = [];
        const merchantImportArray = [];

        chart_two_data.forEach((element) => {
          if (
            element.INDICATOR ===
            "Commercial services exports by sector and partner – annual"
          ) {
            commercialExportArray.push(element);
          } else if (
            element.INDICATOR ===
            "Merchandise exports by product group – annual"
          ) {
            merchantExportArray.push(element);
          } else if (
            element.INDICATOR ===
            "Merchandise imports by product group – annual"
          ) {
            merchantImportArray.push(element);
          } else {
            commercialImportArray.push(element);
          }
        });
        console.log(commercialExportArray);
        console.log(commercialImportArray);
        console.log(merchantExportArray);
        console.log(merchantImportArray);
        const chartDataTwo = {
          labels: merchantImportArray?.map((element) => {
            return element.YEAR;
          }),
          datasets: [
            {
              label: "Commercial Imports Services",
              data:
                commercialImportArray?.map((element) => element?.TOTAL_VALUE) ||
                [],
            },
            {
              label: "Merchant Imports Services",
              data:
                merchantImportArray?.map((element) => element?.TOTAL_VALUE) ||
                [],
            },
            {
              label: "Merchant Export Services",
              data:
                merchantExportArray?.map((element) => element?.TOTAL_VALUE) ||
                [],
            },
            {
              label: "Commercial Exports Services",
              data:
                commercialExportArray?.map((element) => element?.TOTAL_VALUE) ||
                [],
            },
          ],
        };
        const data = { chartDataOne, chartDataTwo };
        resolve(data); // Resolve with the value you want to return
      })
      .catch((err) => {
        console.log("error->", err);
        reject(err); // Reject with the error
      });
  });
};

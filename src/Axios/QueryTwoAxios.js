import axios from "axios";

export const QueryTwoAxios = (start_date,end_date,state_name) => {
  return new Promise((resolve, reject) => {
    console.log(state_name);
    const queryParams = {
      start_date: start_date.year(),
      end_date: end_date.year(),
      state_name: state_name
    };

    axios
      .get("http://127.0.0.1:5000/query2", { params: queryParams })
      .then((response) => {
        console.log(response.data);
        const state_avg_age_data = response.data.data_graph1;
        const candidate_avg_age_data = response.data.data_graph2;

        const chartData = {
          labels: state_avg_age_data?.map((element) => element.YEAR),
          datasets: [
            {
              label: "State Avg Age",
              data: state_avg_age_data?.map((element) => element?.AVG_AGE)
            },
            {
              label: "Candidate Avg Age",
              data: candidate_avg_age_data?.map(
                (element) => element?.AVERAGE_AGE
              ),
            },
          ],
        };
        resolve(chartData); // Resolve with the value you want to return
      })
      .catch((err) => {
        console.log("error->", err);
        reject(err); // Reject with the error
      });
  });
};

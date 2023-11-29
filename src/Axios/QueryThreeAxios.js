import axios from "axios";

export const QueryThreeAxios = (start_date, end_date, state_name) => {
  return new Promise((resolve, reject) => {
    const queryParams = {
      start_date: start_date.year(),
      end_date: end_date.year(),
      state_name: state_name,
    };

    axios
      .get("http://127.0.0.1:5000/query3", { params: queryParams })
      .then((response) => {
        const gun_violence_chart_data = response.data.data_graph1;
          const chartDataOne = {
            labels: gun_violence_chart_data?.map((element) => {
              return element.YEAR;
            }),
            datasets: [
              {
                label: "Number of Deaths Per 1000000",
                data: gun_violence_chart_data?.map(
                  (element) => element?.DEATHS_PER_100000
                ),
              },
            ],
          };

          const candidate_vote_chart_data = response.data.data_graph2;
          console.log("checking-->",candidate_vote_chart_data);
          const chartDataTwo = {
            labels: candidate_vote_chart_data?.map((element) => {
              return element.YEAR+"("+element.RULING_PARTY+")";
            }),
            datasets: [
              {
                label: "Candidate Vote Percentage",
                data: candidate_vote_chart_data?.map(
                  (element) => element?.VOTE_PERCENTAGE
                ),
              },
            ],
          };
          const data={chartDataOne,chartDataTwo}
          resolve(data); // Resolve with the value you want to return
        
      })
      .catch((err) => {
        console.log("error->", err);
        reject(err); // Reject with the error
      });
  });
};

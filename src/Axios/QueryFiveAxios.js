import axios from "axios";

export const QueryFiveAxios = (state_name) => {
  return new Promise((resolve, reject) => {
    console.log(state_name);
    const queryParams = {
      state_name: state_name,
    };

    axios
      .get("http://127.0.0.1:5000/query5", { params: queryParams })
      .then((response) => {
        console.log(response.data);
        const state_vote = response.data.data_graph1;
        const state_gdp_vs_country_gdp = response.data.data_graph2;

        console.log("-->", state_vote);

        // const democratArray = [];
        // const republicanArray = [];

        // state_vote.forEach((element) => {
        //   if (element.PARTYNAME === "DEMOCRAT") {
        //     democratArray.push(element);
        //   } else {
        //     republicanArray.push(element);
        //   }
        // });
        const chartDataOne = {
          labels: state_vote?.map((element) => element.YEAR),
          datasets: [
            {
              label: "Democrat Party",
              data: state_vote?.map((element) => element?.DEMOCRAT_VOTE_PERCENTAGE),
            },
            {
              label: "Republican Party",
              data: state_vote?.map((element) => element?.REPUBLICAN_VOTE_PERCENTAGE),
            },
          ],
        };

        const chartDataTwo = {
          labels: state_gdp_vs_country_gdp?.map((element) => element.YEAR),
          datasets: [
            {
              label: "State GDP Per Capita",
              data: state_gdp_vs_country_gdp?.map(
                (element) => element?.STATE_GDP_PER_CAPITA
              ),
            },
            {
              label: "US GDP Per Capita",
              data: state_gdp_vs_country_gdp?.map(
                (element) => element?.US_GDP_PER_CAPITA
              ),
            },
          ],
        };

        resolve({ chartDataOne, chartDataTwo }); // Resolve with the value you want to return
      })
      .catch((err) => {
        console.log("error->", err);
        reject(err); // Reject with the error
      });
  });
};

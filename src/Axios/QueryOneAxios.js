import axios from "axios";

export const QueryOneAxios = (start_date, end_date, sector) => {
  return new Promise((resolve, reject) => {
    const queryParams = {
      start_date: start_date.year(),
      end_date: end_date.year(),
      sector: sector,
    };

    axios
      .get("http://127.0.0.1:5000/query1", { params: queryParams })
      .then((response) => {
        const data_array = response.data.data;
        console.log("Received data_array:", data_array);
        if (Array.isArray(data_array)) {
          console.log("Received data_array:", data_array);
          const chartData = {
            labels: data_array?.map(
              (element) =>
                element.PREZ_START_DATE + " (" + element.PREZ_NAME + ")"
            ),
            datasets: [
              {
                label: "GDP Contribution",
                data: data_array?.map((element) => element?.GDP_CONTRI),
              },
            ],
          };

          resolve(chartData); // Resolve with the value you want to return
        }
      })
      .catch((err) => {
        console.log("error->", err);
        reject(err); // Reject with the error
      });
  });
};

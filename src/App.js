import { useState } from "react";
import "./App.css";
import Analysis from "./Components/Analysis";
import Help from "./Components/HelpButton";
import QueryCardView from "./Components/QueryCardView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MockPresidentData } from "./MockData/Data";
import backgroundWallpaper from "./Assets/LandingPage.jpg";
import { Box } from "@mui/material";
import HelpPage from "./Components/HelpPage";



function App() {
  console.log(MockPresidentData[0].year);
  const [userData, setUserData] = useState({

    labels: MockPresidentData.map((yearData) => yearData.year),
    datasets: [
      {
        label: MockPresidentData[0].presdient_name,
        data: MockPresidentData.map((prezVoteData) => prezVoteData?.votes_won),
      },
      {
        label: MockPresidentData[1].presdient_name,
        data: MockPresidentData.map((prezVoteData) => prezVoteData.votes_won),
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Specify the color for this bar
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Box sx={{
            backgroundImage:`url(${backgroundWallpaper})`,
            width:'100vw',
            height:'100vh',
            backgroundSize:'cover'}}>
          <Help/>
            <QueryCardView/>
          </Box>
        </Route>
        <Route path="/Analysis/:queryNumber">
          <Analysis chartData={userData} />
        </Route>
        <Route path="/HelpPage">
          <HelpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Analysis from "./Components/Analysis";
import Help from "./Components/HelpButton";
import QueryCardView from "./Components/QueryCardView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MockPresidentData } from "./Data/Data";
import { MockCandidateData, MockVoterData } from "./Data/QueryTwoMockData";
import backgroundWallpaper from "./Assets/LandingPage.jpg";
import { Box } from "@mui/material";
import HelpPage from "./Components/HelpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Box
            sx={{
              backgroundImage: `url(${backgroundWallpaper})`,
              width: "100vw",
              height: "100vh",
              backgroundSize: "cover",
            }}
          >
            <Help />
            <QueryCardView />
          </Box>
        </Route>
        <Route path="/Analysis/:queryNumber">
          <Analysis />
        </Route>
        <Route path="/HelpPage">
          <HelpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

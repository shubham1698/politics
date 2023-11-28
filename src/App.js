import "./App.css";
import Analysis from "./Components/Analysis";
import QueryCardView from "./Components/QueryCardView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import backgroundWallpaper from "./Assets/LandingPage.jpg";
import { Box } from "@mui/material";
import HelpPage from "./Components/HelpPage";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <Router >
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
            <NavBar />
            <QueryCardView />
          </Box>
        </Route>
        <Route path="/Analysis/:queryNumber">
          <NavBar />
          <Analysis />
        </Route>
        <Route path="/HelpPage">
          <NavBar />
          <HelpPage />
        </Route>
        <Route path="/AboutPage">
          <NavBar />
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

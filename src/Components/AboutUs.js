import React, { useState, useEffect } from "react";
import backgroundWallpaper from "../Assets/AnalyzePage.jpg";
import { Box, Typography } from "@mui/material";
import axios from "axios";

export default function AboutUs() {
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    try {
      axios.get("http://127.0.0.1:5000/total_count").then((response) => {
        console.log(response);
        setDataCount(response.data.data[0].TOTAL_ROWS_ACROSS_TABLES);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${backgroundWallpaper})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ background: "yellow", width: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Our political trends are derived from the analysis of data stored in
            our database, totaling {dataCount} entries.
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          Sources:
          <ul>
            <li>
              <a className="navlink_source" href="https://stats.wto.org/">
                USATradeStatistics
              </a>
            </li>
            <li>
              <a
                className="navlink_source"
                href="www.wikipedia.com"
              >
                USA Presidents Data
              </a>
            </li>
            <li>
              <a
                className="navlink_source"
                href=" WWW.Census.gov"
              >
                CountyPopulation
              </a>
            </li>
            <li>
              <a
                className="navlink_source"
                href="https://electionlab.mit.edu/data"
              >
                SenateVotes
              </a>
            </li>
            <li>
              <a className="navlink_source" href="https://www.bea.gov/">
                GDPData
              </a>
            </li>
            <li>
              <a
                className="navlink_source"
                href="https://transition.fcc.gov/oet/info/maps/census/fips/fips.txt"
              >
                USStateFIPSCode
              </a>
            </li>
            <li>
              <a
                className="navlink_source"
                href="https://www.gunviolencearchive.org"
              >
                USCountyFIPSCode
              </a>
            </li>
            <li>
              <a
                className="navlink_source"
                href="https://example.com/gunviolencedeaths"
              >
                GunViolenceDeaths
              </a>
            </li>
            <li>
              <a className="navlink_source" href="https://www.fec.gov/introduction-campaign-finance/election-and-voting-information/">
              PresidentialPopularVote, HORPopularVote
              </a>
            </li>
          </ul>
        </Typography>
      </Box>
    </div>
  );
}

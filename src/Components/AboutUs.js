import React, { useState, useEffect } from "react";
import backgroundWallpaper from "../Assets/government-banner.jpg";
import { Box, Typography, Stack } from "@mui/material";
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
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: `rgb(30, 41, 56)`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={backgroundWallpaper}
          alt="Home Icon"
          style={{ width: "100%", height: "auto" }}
        />
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Our political trends are derived from the analysis of data stored in
          our database, totaling {dataCount} entries.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            backgroundColor: `rgb(30, 41, 56)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            marginTop: "20px",
          }}
        >
          Sources:
          <Stack
            direction="row"
            spacing={5}
            sx={{
              display: "flex",
              ml: "auto",
              backgroundColor: `rgb(30, 41, 56)`,
            }}
          >
            <Box
              sx={{
                width: "auto",
                background: `rgb(166, 196, 237)`,
                borderRadius: "10px",
              }}
            >
              <ul>
                <li>
                  <a className="navlink_source" href="https://stats.wto.org/">
                    USATradeStatistics
                  </a>
                </li>
                <li>
                  <a className="navlink_source" href="www.wikipedia.com">
                    USA Presidents Data
                  </a>
                </li>
                <li>
                  <a className="navlink_source" href=" WWW.Census.gov">
                    CountyPopulation
                  </a>
                </li>
              </ul>
            </Box>
            <Box
              sx={{
                width: "auto",
                background: `rgb(166, 196, 237)`,
                borderRadius: "10px",
              }}
            >
              <ul>
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
              </ul>
            </Box>
            <Box
              sx={{
                width: "auto",
                background: `rgb(166, 196, 237)`,
                borderRadius: "10px",
              }}
            >
              <ul>
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
                  <a
                    className="navlink_source"
                    href="https://www.fec.gov/introduction-campaign-finance/election-and-voting-information/"
                  >
                    PresidentialPopularVote
                  </a>
                </li>
              </ul>
            </Box>
          </Stack>
        </Typography>
      </Box>
    </div>
  );
}

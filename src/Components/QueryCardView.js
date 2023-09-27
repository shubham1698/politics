import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";

export default function QueryCardView() {
  const queryList = [
    {
      number: 1,
      content:
        "Over time, how has the US trade with the rest of the world was affected by the president in power and" +
        "their party affiliation in various sectors of the economy?",
    },
    {
      number: 2,
      content:
        "How has the demographic change(age) within different districts of USA" +
        "affected the demographics of people elected to the House of Commons over time?",
    },
    {
      number: 3,
      content:
        "How has Gun Violence affected the voting of Americans in state elections over time?",
    },
    {
      number: 4,
      content:
        "How has the voter turnout(percentage of people who voted among voters who are eligible to vote) changed in the US presidential" +
        " elections over time based on the overall economic performance of the country in terms of exports and imports?",
    },
    {
      number: 5,
      content:
        "How has the margin of victory for a particular party in a particular state changed" +
        " over time with respect to the GDP per capita of that State compared to the National average?",
    },
  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {queryList.map((queryItem, index) => (
         <Link key={index} className="navlink" to={`/Analysis/${queryItem.number}`}>
        <Card
          sx={{
            minWidth: 275,
            minHeight: 250,
            bgcolor: "#1a2f5c",
            boxShadow: "2",
            borderRadius: "10px",
          }}
          className="queryDiv"
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
              color={"whiteSmoke"}
            >
              Query {queryItem.number}
            </Typography>
          </CardContent>
          <hr/>
          <Typography
            textOverflow={false}
            variant="h6"
            sx={{ fontSize: "10px" }}
            color={"whiteSmoke"}
          >
            {queryItem.content}
          </Typography>
        </Card>
        </Link>
      ))}
    </Grid>
  );
}

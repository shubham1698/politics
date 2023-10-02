import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

export default function QueryCardView() {
  const queryList = [
    {
      number: 1,
      content: "Query-1(Influence of US Presidents on Trade)",
    },
    {
      number: 2,
      content: "Query-2(District Age Impacts House Demographics)",
    },
    {
      number: 3,
      content: "Query-3(Gun Violence Impact on Elections",
    },
    {
      number: 4,
      content: "Query-4(US Presidential Election Voter Turnout)",
    },
    {
      number: 5,
      content: "Query-5(State Margin vs. GDP Trends)",
    },
  ];
  return (
    <Box sx={{ minWidth: 420 }}>
      <FormControl
        fullWidth
        sx={{
          background: "white",
          borderRadius: "10px",
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          style={{ color: "black", textAlign: "center", borderRadius: "10px" }}
        >
          Lets Analyze Political Trends
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          {queryList.map((queryItem) => (
            <MenuItem key={queryItem.number} value={queryItem.number}>
              <Link className="navlink" to={`/Analysis/${queryItem.number}`}>
                {queryItem.content}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

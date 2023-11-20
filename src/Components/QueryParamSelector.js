import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button } from "@mui/material";

export default function QueryParamSelector(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <DatePicker
          views={["year"]}
          label="Start Year"
          minDate={props.minDate}
          maxDate={props.maxDate}
          animateYearScrolling
          sx={{ marginRight: "50px" }}
        />

        <DatePicker
          views={["year"]}
          label="End Year"
          minDate={props.minDate}
          maxDate={props.maxDate}
          sx={{ marginRight: "50px" }}
          animateYearScrolling
        />

        <Button
          variant="contained"
          value="Click"
          sx={{ direction: "flex", marginTop: "5px", height: "40px" }}
          onClick={props.onDataRequestedStateChange}
        >
          Submit
        </Button>
      </Box>
    </LocalizationProvider>
  );
}

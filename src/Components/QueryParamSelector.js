import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { sectorArray } from "../Data/SectorData";
import { USAStateData } from "../Data/UsaStateList";

export default function QueryParamSelector(props) {
  const { obj } = props;
  const {
    queryNumber,
    minDate,
    maxDate,
    dataRequestedState,
    onDataRequestedStateChange,
  } = obj;

  const [selectedThirdPara, updateSelectedThirdParam] = useState("");

  const updateSelectedThirdParamHandle = (event) => {
    updateSelectedThirdParam(event.target.value);
  };

  const [selectedMinDate, updateSelectedMinDate] = useState();

  const updateMinDate = (newMinDate) => {
    updateSelectedMinDate(newMinDate);
  };

  const [selectedMaxDate, updateSelectedMaxDate] = useState();

  const updateMaxDate = (newMaxDate) => {
    updateSelectedMaxDate(newMaxDate);
  };

  const onHandleSubmitAction = () => {
    console.log(selectedThirdPara);
    if (queryNumber != "/Analysis/2") {
      if (selectedThirdPara !== "" && selectedMinDate < selectedMaxDate) {
        console.log("truth");
        onDataRequestedStateChange(
          true,
          selectedMinDate,
          selectedMaxDate,
          selectedThirdPara
        );
      } else {
        console.log("falsely");
        onDataRequestedStateChange(false, "", "", "");
      }
    } else {
      if (selectedThirdPara !== "") {
        console.log("truth");
        onDataRequestedStateChange(
          true,
          selectedMinDate,
          selectedMaxDate,
          selectedThirdPara
        );
      } else {
        console.log("falsely");
        onDataRequestedStateChange(false, "", "", "");
      }
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          marginTop:"100px",
          justifyContent: "space-evenly",
        }}
      >
        {queryNumber != "/Analysis/2" ? (
          <>
            <DatePicker
              views={["year"]}
              label="Start Year"
              minDate={minDate}
              maxDate={maxDate}
              onYearChange={updateMinDate}
              animateYearScrolling
              sx={{
                marginRight: "50px",
                "& input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            />

            <DatePicker
              views={["year"]}
              label="End Year"
              minDate={minDate}
              maxDate={maxDate}
              onYearChange={updateMaxDate}
              sx={{
                marginRight: "50px",
                "& input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
              animateYearScrolling
            />
          </>
        ) : null}
        <FormControl sx={{ width: 300, justifyContent: "center" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "white",
            }}
          >
            {queryNumber == "/Analysis/1"
              ? "Select the Sector"
              : "Select the State"}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select the Sector"
            value={selectedThirdPara}
            sx={{
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
            onChange={updateSelectedThirdParamHandle}
            renderValue={(selected) => (
              <div style={{ color: 'white' }}>{selected}</div>
            )}
          >
            {queryNumber == "/Analysis/1"
              ? sectorArray.map((queryItem) => (
                  <MenuItem key={queryItem.id} value={queryItem.sector_name}>
                    {queryItem.sector_name}
                  </MenuItem>
                ))
              : USAStateData.map((queryItem) => (
                  <MenuItem key={queryItem.id} value={queryItem.state_name}>
                    {queryItem.state_name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          value="Click"
          onClick={onHandleSubmitAction}
        >
          Submit
        </Button>
      </Box>
    </LocalizationProvider>
  );
}

import { Box, Typography } from "@mui/material";
import React from "react";

export default function Status(props) {
  console.log(props.currentStatus);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Typography variant="h3" sx={{color:"white"}}>{props.currentStatus}</Typography>
    </Box>
  );
}

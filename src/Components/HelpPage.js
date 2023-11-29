import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import car_one from "../Assets/car_one.jpg";
import car_two from "../Assets/car_two.jpg";
import { Link } from "react-router-dom";

export default function HelpPage() {
  var items = [
    {
      name: "Step 1",
      description: "Select any of the desired Query from the dropdown box.",
      imagePath: car_one,
    },
    {
      name: "Step 2",
      description: "Ejoy the trend graph displayed on your screen.",
      imagePath: car_two,
    },
  ];

  return (
    <Box
      sx={{
        position:"fixed",
        width: "100%",
        height:'100vh',
        backgroundColor:`rgb(30, 41, 56)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        indicatorIconButtonProps={{
          style: {
            margin: "10px",
          },
        }}
        sx={{
          width: "1000px",
          height: "500px"
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Link to="/">
        <Button variant="contained">
          Lets Get Cracking
        </Button>
      </Link>
    </Box>
  );
}
function Item(props) {
  return (
    <Paper
      sx={{
        width: "800px",
        height: "400px",
        marginLeft: "100px",
        backgroundColor: "#15205e",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          margin: "10px",
          fontFamily: "Roboto",
          color: "white",
          fontStyle: "bold",
        }}
      >
        {props.item.name}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          margin: "10px",
          fontFamily: "Roboto",
          color: "white",
          fontStyle: "bold",
        }}
      >
        {props.item.description}
      </Typography>

      <Box sx={{ marginLeft: "400px" }}>
        <img src={`${props.item.imagePath}`} height={"200px"} />
      </Box>
    </Paper>
  );
}

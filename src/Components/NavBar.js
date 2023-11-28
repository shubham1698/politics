import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import home_icon from "../Assets/home_icon.png";

export default function NavBar() {
  return (
    <AppBar position="sticky" sx={{ background: `rgb(180, 203, 214)` }}>
      <Toolbar>
        <IconButton>
          <img
            src={home_icon}
            alt="Home Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </IconButton>
        <Link className='navlink' to="/">
          <Typography variant="h6" sx={{ color: "Black" }}>
            Political Trendlyzer
          </Typography>
        </Link>
        <Stack direction="row" spacing={2} sx={{ display: "flex", ml: "auto" }}>
          <Link to="/AboutPage">
            <Button color="inherit" sx={{ color: "Black" }}>
              About Us
            </Button>
          </Link>
          <Link to="/HelpPage"><Button color="inherit" sx={{ color: "Black" }}>
            Help
          </Button></Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

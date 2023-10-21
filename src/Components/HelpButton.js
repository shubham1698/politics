import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";


export default function Help() {
  return (
    <Box>
    <Link to='/HelpPage'>
      <Button
        size="large"
        variant="containd"
        sx={{ color: "Black", background: "yellow",marginLeft:'90%',
        marginTop:'5%',
                '&:hover': {
          backgroundColor: 'primary.main'
        } }}
        startIcon={<HelpIcon />}> 
        Help
      </Button>
    </Link>   
     </Box>

  );
}

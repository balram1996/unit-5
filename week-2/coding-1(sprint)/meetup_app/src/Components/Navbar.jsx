import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import  Toolbar  from "@mui/material/Toolbar";
import  IconButton  from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import  Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit">Create Meet</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar
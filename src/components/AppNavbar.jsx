import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const AppNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: 0 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: 1,
              padding: 1,
              borderRadius: 2,
              backgroundColor: "black",
              color: "white",
              fontWeight: 750,
            }}
          >
            News
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 750 }}
          >
            Portal
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavbar;

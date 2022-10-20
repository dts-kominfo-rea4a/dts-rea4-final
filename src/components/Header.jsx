import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Header = () => {
  const [auth, setAuth] = React.useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <AppBar position="static" color="transparent" variant="rounded">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                flexGrow: 1,
                textDecoration: "none",
              }}
            >
              <img src="/logo.png" alt="News Portal" />
            </Typography>
            <Button
              color="inherit"
              onClick={() => setAuth(false)}
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              <LogoutIcon sx={{ marginRight: "10px", color: "#B673C0" }} />
              <Typography
                variant="body1"
                component="span"
                sx={{
                  color: "#5D2D68",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Typography>
            </Button>
          </Toolbar>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <FilterListIcon sx={{ color: "#F3CD0F" }} />
            </IconButton>

            <IconButton
              type="button"
              sx={{ p: "10px", mr: "10px" }}
              aria-label="search"
            >
              <FilterAltOutlinedIcon sx={{ color: "#F3CD0F" }} />
            </IconButton>

            <Box
              sx={{
                border: "3px solid #F3CD0F",
                borderRadius: "10px",
                flex: 1,
                display: "flex",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon sx={{ color: "#DAB70A" }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

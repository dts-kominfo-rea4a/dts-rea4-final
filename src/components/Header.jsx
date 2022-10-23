import React, { useState } from "react";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Header = ({ typeHeader }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleTypeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleSubmitSearch();
    }
  };

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
          {typeHeader === "search" ? (
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
                  onInput={handleTypeSearch}
                  onKeyUp={handleEnter}
                  value={search}
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={handleSubmitSearch}
                >
                  <SearchIcon sx={{ color: "#DAB70A" }} />
                </IconButton>
              </Box>
            </Box>
          ) : (
            ""
          )}

          {typeHeader === "back" ? (
            <Box
              onClick={() => navigate(-1)}
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ArrowBackIcon
                  sx={{
                    color: "#F3CD0F",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    color: "#BF8300",
                    ml: "10px",
                    fontSize: "18px",
                    lineHeight: "30px",
                  }}
                >
                  Back
                </Typography>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

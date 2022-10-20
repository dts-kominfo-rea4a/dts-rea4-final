import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Search = styled("div")(({ theme }) => ({
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  position: "absolute",
  transform: `translateY(-50%)`,
  top: "50%",
  right: "0px",
  width: "300px",
  transition: `.5s`,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const Header = () => {
  const [showSearch, setshowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(false);

  const searchToggle = () => {
    setshowSearch(!showSearch);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            <Box sx={{ position: "relative" }}>
              {showSearch ? (
                <Search>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    sx={{ width: "100%" }}
                  />
                  <IconButton
                    size="large"
                    aria-label="display more actions"
                    edge="end"
                    color="inherit"
                    sx={{
                      position: "absolute",
                      top: `-4px`,
                      display: "flex",
                    }}
                    className="active"
                  >
                    <SearchIcon />
                  </IconButton>
                </Search>
              ) : (
                ""
              )}

              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
                sx={{
                  marginRight: "2px",
                }}
                onClick={searchToggle}
                className="active"
              >
                {showSearch ? <CloseIcon /> : <SearchIcon />}
              </IconButton>
            </Box>
            {auth ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>My account</MenuItem>
                  <MenuItem onClick={() => setAuth(false)}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <Button color="inherit" onClick={() => setAuth(true)}>
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

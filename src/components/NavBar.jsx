import React, { useEffect, useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  List,
  Card,
  ListItemIcon,
  InputBase,
  styled,
  alpha,
  Divider,
  Container,
  ListItem,
  ListItemText,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useNavigate, useLocation, NavLink } from "react-router-dom";

// Import fungsi untuk melakukan Logout
import useFirebaseStore, { selectKeluarDariApps } from "../authentication/firebase";

import styles from "./NavBar.module.css";
import SearchItemMovie from "./SearchItemMovie";
import SearchItemTv from "./SearchItemTv";

import useMovieStore, {
  selectSearchMovies,
  searchedMovies,
  selectResetSearchedMovies,
} from "../stores/movie";

import useComponentVisible from "../functions/useComponentVisible";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      maxWidth: "30vw",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const searchMovies = useMovieStore(selectSearchMovies);
  const searchResult = useMovieStore(searchedMovies);
  const resetResult = useMovieStore(selectResetSearchedMovies);
  const resetSearchedMovie = useMovieStore(selectResetSearchedMovies);
  const [searchKey, setSearcKey] = useState("");
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const keluarDariApps = useFirebaseStore(selectKeluarDariApps);

  useEffect(() => {
    setSearcKey("");
    resetSearchedMovie();
  }, [location.pathname]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const searchHandler = async (event) => {
    let key = event.target.value;
    setSearcKey(key);
    if (key) await searchMovies(key);
    else resetResult();
  };

  const searchFocusHander = () => {
    setIsComponentVisible(true);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // keluarDariAppsSelesai
  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await keluarDariApps();
    navigate("/login");
  };
  const movieSearchClickHandler = (event) => {
    let key = event.target.value;
    navigate("movie/${key}");
  };

  return (
    <>
      <Box className={styles.grow}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="relative">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="/images/logo.png"
                    style={{ height: 30, width: 30 }}
                  />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {
                      //todo add page here
                    }
                  </Menu>
                </Box>
                {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="/images/logo.png"
                    style={{ height: 20, width: 20 }}
                  />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {
                    // pages.map((page) => (
                    //   <Button
                    //     key={page}
                    //     onClick={handleCloseNavMenu}
                    //     sx={{ my: 2, color: "white", display: "block" }}
                    //   >
                    //     {page}
                    //   </Button>
                    // ))
                    //todo add page here
                    // <Button onClick={() =>navigate("/movies")}>Movies</Button>
                  }
                </Box>
                <Search style={{ maxWidth: "30vw" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    onChange={searchHandler}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchKey}
                    onFocus={searchFocusHander}
                  />
                </Search>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={buttonLogoutOnClickHandler}>
                    <ListItemIcon>
                      <Button>
                        <Logout fontSize="small" />
                      </Button>
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Toolbar>
            </Container>
          </AppBar>
        </ThemeProvider>
      </Box>

      <Box ref={ref}>
        {isComponentVisible ? (
          <List
            style={{
              position: "absolute" /* Sit on top of the page content */,
              top: "8v",
              right: 0,
              width: "100vw",
              zIndex: 2 /* Specify a stack order in case you're using a different order for other elements */,
            }}
          >
            { searchResult.length > 0 ? (
              <Card>
                {searchResult.map((result) =>
                  result.media_type === "movie" ? (
                    <SearchItemMovie movie={result} key={result.id} />
                  ) : result.media_type === "tv" ? (
                    <SearchItemTv tv={result} key={result.id} />
                  ) : (
                    ""
                  )
                )}
              </Card>
            ) : (
              searchKey.length>0?<Card>
                <ListItem>
                  <ListItemText primary={"Not Found"} />
                </ListItem>
              </Card>:""
            )}
          </List>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default NavBar;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import InputIcon from "@mui/icons-material/Input";
import { Button, ButtonGroup, createTheme, ThemeProvider } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../Auth/firebase";
const Navbar = () => {
  const drawerWidth = 250;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));
  const theme1 = createTheme({
    palette: {
      neutral: {
        main: "#121221",
        contrastText: "#fff",
      },
      primary: {
        main: "#002884",
      },
      secondary: {
        main: "#FDFDFD",
      },
    },
  });
  const loginHandler = () => {
    navigate("Login");
  };

  const registerHandler = () => {
    navigate("/Register");
  };

  const logOutHandler = () => {
    logOut();
    navigate("/login");
  };
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "white" }}>
        <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
          <Toolbar style={{ marginRight: "55px", backgroundColor: "white" }}>
            {/* ini tombol news dan portal */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100em" }}>
              <ThemeProvider theme={theme1}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ margin: "2em", boxShadow: "none", width: "150px" }}>
                  <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <Button color="neutral" sx={{ fontSize: "12px", fontFamily: "Playfair Display" }}>
                      News
                    </Button>
                  </Link>
                  <Link to="/Portal" style={{ textDecoration: "none", color: "black" }}>
                    <Button color="secondary" sx={{ fontSize: "12px", fontFamily: "Playfair Display" }}>
                      Portal
                    </Button>
                  </Link>
                </ButtonGroup>
              </ThemeProvider>
              <SearchOutlinedIcon sx={{ color: "black" }} />
            </div>
            {/* Title */}
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div"></Typography>
            {/* Hamburger dan Search Icon */}
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: "none" }) }}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={open}>
          <DrawerHeader />
        </Main>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem sx={{ display: "flex", flexDirection: "column" }} disablePadding>
              <ListItemButton>
                <LoginIcon />
                <ListItemText primary={"Login"} onClick={loginHandler} />
              </ListItemButton>
              <ListItemButton sx={{ margin: "0" }}>
                <InputIcon />
                <ListItemText primary={"Register"} onClick={registerHandler} />
              </ListItemButton>
              <ListItemButton>
                <LogoutIcon />
                <ListItemText primary={"LogOut"} onClick={logOutHandler} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;

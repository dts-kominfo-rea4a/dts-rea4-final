import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOutAll } from "../authentications/firebaseAuth";

const drawerWidth = 240;
const navItems = [
  { text: "Sign In", url: "/signIn" },
  { text: "Sign Up", url: "/signUp" },
];

const AppNavbar = (props) => {
  const [user] = useAuthState(auth);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSignOut = () => {
    signOutAll();
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2 }}
      >
        News Portal
      </Typography>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to="/"
          sx={{ textAlign: "center" }}
        >
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <List>
        {navItems.map((item) =>
          !user ? (
            <ListItem
              key={item.url}
              disablePadding
            >
              <ListItemButton
                component={Link}
                to={item.url}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ) : null
        )}
        {user ? (
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleSignOut}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default AppNavbar;

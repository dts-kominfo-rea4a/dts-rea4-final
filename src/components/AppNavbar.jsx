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
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { text: "Sign In", url: "/signIn" },
  { text: "Sign Up", url: "/signUp" },
];

const AppNavbar = (props) => {
  let navigate = useNavigate();

  const [user] = useAuthState(auth);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const [textSearch, setTextSearch] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSignOut = async () => {
    await signOutAll();
  };

  const handleOpenSearch = () => setOpenSearch(true);
  const handleCloseSearch = () => setOpenSearch(false);

  const onChangeHandler = (event) => {
    setTextSearch(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate(`/${textSearch}`);
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
        {user ? user.email : "News Portal"}
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
            onClick={handleOpenSearch}
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
      <Modal
        open={openSearch}
        onClose={handleCloseSearch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            onSubmit={onSubmitHandler}
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              color="secondary"
              margin="normal"
              fullWidth
              name="search"
              label="Search"
              type="text"
              id="search"
              value={textSearch}
              onChange={onChangeHandler}
            />
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AppNavbar;

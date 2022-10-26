import React from "react";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { MyList } from "../../styles/appbar";
import ShopingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  ActionIconsContainerDekstop,
  ActionIconsContainerMobile,
} from "../../styles/appbar";
import { Colors } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOutFromApp } from "../../authentication/firebase";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDekstop;

  const navigate = useNavigate();

  const loginOnClick = () => {
    navigate("/login");
  };

  const favoriteOnClick = () => {
    navigate("/watchlist");
  };

  const cartOnClick = () => {
    navigate("/cart");
  };

  const [user, isLoading, error] = useAuthState(auth);
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = () => {
    signOutFromApp();
  };

  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }} onClick={cartOnClick}>
          <ListItemIcon
            sx={{
              justifyContent: "center",
              display: "flex",
              color: matches && Colors.secondary,
            }}
          >
            <ShopingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{ justifyContent: "center" }}
          onClick={favoriteOnClick}
        >
          <ListItemIcon
            sx={{
              justifyContent: "center",
              display: "flex",
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        {user ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{
                color: matches && Colors.secondary,
              }}
            >
              <ListItemText>
                <strong>{user.email}</strong>
              </ListItemText>
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
              <MenuItem onClick={logOutHandler}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            <ListItemButton
              sx={{ justifyContent: "center" }}
              onClick={loginOnClick}
            >
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  color: matches && Colors.secondary,
                }}
              >
                <PersonIcon />
              </ListItemIcon>
            </ListItemButton>
          </div>
        )}
      </MyList>
    </Component>
  );
}

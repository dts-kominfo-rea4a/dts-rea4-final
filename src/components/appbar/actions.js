import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
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

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDekstop;

  const navigate = useNavigate();

  const loginOnClick = () => {
    navigate("/login");
  };

  const favoriteOnClick = () => {
    navigate("/favorite");
  };

  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
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
      </MyList>
    </Component>
  );
}

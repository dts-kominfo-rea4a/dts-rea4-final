import { ListItemButton, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useNavigate } from "react-router-dom";

export default function AppbarDekstop({ matches }) {
  const navigate = useNavigate();

  const btnUpcomingOnClick = (e) => {
    navigate("/movies");
  };
  const btnNoPlayingOnClick = (e) => {
    navigate("/products");
  };
  const btnHomeOnClick = (e) => {
    navigate("/home");
  };
  return (
    /*
    Appbar container
    Header
    List
    */
    <>
      <AppbarContainer>
        <AppbarHeader>Movie</AppbarHeader>
        <MyList type="row">
          <ListItemButton onClick={btnHomeOnClick}>Home</ListItemButton>
          <ListItemButton onClick={btnUpcomingOnClick}>
            Now Playing
          </ListItemButton>
          <ListItemButton onClick={btnNoPlayingOnClick}>
            Upcoming
          </ListItemButton>
          <ListItemText primary="Contact Us" />
          <ListItemButton>
            <SearchIcon />
          </ListItemButton>
          <Actions matches={matches} />
        </MyList>
      </AppbarContainer>
    </>
  );
}

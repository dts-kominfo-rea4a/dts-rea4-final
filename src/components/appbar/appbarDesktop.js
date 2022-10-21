import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDekstop({ matches }) {
  return (
    /*
    Appbar container
    Header
    List
    */
    <>
      <AppbarContainer>
        <AppbarHeader>My Coffee</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
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

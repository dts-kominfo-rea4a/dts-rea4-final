import React from "react";
import { ListItem, ListItemText, Divider, ListItemIcon } from "@mui/material";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const SearchItemTv = ({ tv }) => {
  const base_url = "https://image.tmdb.org/t/p/w20_and_h30_face/";
  return (
    <>
      <ListItem key={tv.id} style={{ backgroundColor: "white" }}>
        <ListItemIcon>
          <LiveTvIcon />
        </ListItemIcon>
        <ListItemText primary={tv.name} />
      </ListItem>
      <Divider />
    </>
  );
};
export default SearchItemTv;

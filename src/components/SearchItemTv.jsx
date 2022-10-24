import React from "react";
import { ListItem, ListItemText, Divider, ListItemIcon } from "@mui/material";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useNavigate } from "react-router-dom";

const SearchItemTv = ({ tv }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/tv/${tv.id}`);
  }
  return (
    <>
      <ListItem key={tv.id} style={{ backgroundColor: "white" }} onClick={onClickHandler}>
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

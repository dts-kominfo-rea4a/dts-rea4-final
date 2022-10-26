import React from "react";
import { ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useNavigate } from "react-router-dom";

const SearchItemMovie = ({ movie }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <>
      <ListItem style={{ backgroundColor: "white" }} onClick={onClickHandler}>
        <ListItemIcon>
          <LocalMoviesIcon />
        </ListItemIcon>
        <ListItemText primary={movie.original_title} />
      </ListItem>
      <Divider />
    </>
  );
};
export default SearchItemMovie;

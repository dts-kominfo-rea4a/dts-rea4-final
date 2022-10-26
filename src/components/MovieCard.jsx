import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

const MovieCard = ({ movie, media }) => {
  const base_url = "https://image.tmdb.org/t/p/w342/";
  const navigate = useNavigate();
  
  const movieClickHandler = (evt) => {
    navigate(`/${media}/${movie.id}`);
  }
  return (
    <Card sx={{ minWidth: 200, margin: 0.5, '&:hover': { 
      transform: 'scale(1.05)'
    }}} onClick={movieClickHandler}>
      <CardActionArea sx={{ }}>
        <CardMedia
          component="img"
          maxheight="50"
          image={base_url + movie.backdrop_path}
          alt={movie.original_title?movie.original_title:movie.name}
        />
        <CardContent>
          <Typography  gutterBottom variant="body2">
            {movie.original_title?movie.original_title:movie.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;

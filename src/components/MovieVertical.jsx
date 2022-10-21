import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  Box,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";

const MovieVertical = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/w220_and_h330_face/";
  // Contact berisi foto, nama, telepon, dan email
  return (
    <Card sx={{ maxWidth: 150, margin:0.5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxheight="250"
          image={base_url+movie.poster_path}
          alt={movie.original_title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {movie.original_title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {movie.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <Rating
            value={movie.vote_average / 2}
            precision={0.1}
            readOnly
          />
          {movie.vote_average}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieVertical;

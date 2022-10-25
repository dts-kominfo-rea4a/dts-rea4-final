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

const TvVertical = ({ tv }) => {
  const base_url = "https://image.tmdb.org/t/p/w220_and_h330_face/";
  // Contact berisi foto, nama, telepon, dan email
  return (
    <Card sx={{ maxWidth: 150, margin: 0.5, height: 300, '&:hover': {
      transform: 'scale(1.05)',
      height: 'auto',
    }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          maxheight="250"
          image={base_url + tv.poster_path}
          alt={tv.original_title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
            {tv.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {tv.first_air_date}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Rating
              value={tv.vote_average / 2}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography
              variant="body2"
              color="text.secondary"
              alignItems={"center"}
            >
              {tv.vote_average}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TvVertical;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

const LatestNews = () => {
  return (
    <Box sx={{ paddingTop: 10 }}>
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
      >
        Latest News
      </Typography>
      <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="245"
            image="https://placekitten.com/345/345"
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 700 }}
          >
            News Title Lorem Ipsum Dolor Sit Amet
          </Typography>
        </CardContent>
        <CardActions sx={{ color: "grey" }}>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{ color: "grey", fontWeight: 700 }}
          >
            1 Hour Ago
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{ color: "grey", fontWeight: 700 }}
          >
            CNN Indonesia
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default LatestNews;

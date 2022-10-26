import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useNewsStore, { selectNews, selectSingleNews } from "../stores/news";

function Detail(props) {
  // select action
  const fetchSingle = useNewsStore(selectSingleNews);
  const news = useNewsStore(selectNews);
  const { id } = useParams();
  console.log(id, "ini useParam");

  useEffect(() => {
    fetchSingle(id);
  }, [fetchSingle, id]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <Box>
        <Card sx={{ maxWidth: 1240 }}>
          <CardMedia
            component="img"
            height="400"
            image={news.image_url}
            alt={news.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" href={news.url}>
              Go To Web
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default Detail;

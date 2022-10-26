import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import NewsModal from "./NewsModal";

const LatestNews = ({ data }) => {
  const endOfArray = data.articles.length + 1;
  const newData = data.articles.slice(1, endOfArray);
  dayjs.extend(relativeTime);

  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [newsContent, setNewsContent] = useState({});

  const cardClickHandle = (event) => {
    setNewsContent({ url: event.target.id, description: event.target.alt });
    setNewsModalOpen(true);
  };

  const handleModalClose = () => {
    setNewsModalOpen(false);
  };

  return (
    <Box sx={{ paddingTop: 10 }}>
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
      >
        Latest News
      </Typography>
      <Grid
        container
        spacing={5}
      >
        {newData.map((index) => (
          <Grid
            key={index.url}
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
          >
            <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
              <CardActionArea
                id={index?.url}
                onClick={cardClickHandle}
              >
                <CardMedia
                  component="img"
                  height="245"
                  id={index?.url}
                  image={index?.urlToImage}
                  alt={index?.description}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {index.title?.substring(0, 40)}...read more
                  </Typography>
                </CardContent>
                <CardActions sx={{ color: "grey" }}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: "grey", fontWeight: 700 }}
                  >
                    {dayjs(index?.publishedAt).fromNow()}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{ color: "grey", fontWeight: 700 }}
                  >
                    {index.source?.name}
                  </Typography>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <NewsModal
        newsModalOpen={newsModalOpen}
        newsContent={newsContent}
        handleModalClose={handleModalClose}
      />
    </Box>
  );
};

export default LatestNews;

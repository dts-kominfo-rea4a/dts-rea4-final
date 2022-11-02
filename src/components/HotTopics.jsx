import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import NewsModal from "./NewsModal";

const HotTopics = ({ data }) => {
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
    <Box>
      <Typography
        variant="h3"
        fontWeight={600}
        gutterBottom
      >
        Hot Topics
      </Typography>
      <Card sx={{ boxShadow: 0 }}>
        <CardActionArea
          id={data.data[0]?.url}
          onClick={cardClickHandle}
        >
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={8}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  id={data.data[0]?.url}
                  image={data.data[0]?.image_url}
                  alt={data.data[0]?.description}
                  sx={{
                    height: { xs: 250, sm: 400, md: 400, lg: 400, xl: 400 },
                  }}
                />
                <Box
                  sx={{
                    padding: 2,
                    position: "absolute",
                    top: "50%",
                    color: "white",
                    maxWidth: 500,
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 16, sm: 32, md: 32, lg: 32, xl: 32 },
                    }}
                  >
                    {data.data[0].title?.substring(0, 55)}...read more
                  </Typography>
                  <CardActions>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {dayjs(data.data[0]?.published_at).fromNow()}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ fontWeight: 700 }}
                    >
                      {data.data[0]?.source}
                    </Typography>
                  </CardActions>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={0}
              sm={0}
              md={0}
              lg={4}
              xl={4}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 21 }}
              >
                {data.data[0].description?.substring(0, 160)}...read more
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
      <NewsModal
        newsModalOpen={newsModalOpen}
        newsContent={newsContent}
        handleModalClose={handleModalClose}
      />
    </Box>
  );
};

export default HotTopics;

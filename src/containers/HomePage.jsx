import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GridNews from "../components/GridNews";
import HotNews from "../components/HotNews";
import Loading from "../components/Loading";
import Container from "@mui/material/Container";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";

import useNewsStore, {
  selectNews,
  selectTopNews,
  selectErrorNews,
  selectIsLoadingNews,
  selectErrorTopNews,
  selectIsLoadingTopNews,
  selectFetchNews,
  selectFetchTopNews,
} from "../stores/news";
import { Typography } from "@mui/material";

const HomePage = () => {
  const [openError, setOpenError] = useState(true);

  const fetchNews = useNewsStore(selectFetchNews);
  const fetchTopNews = useNewsStore(selectFetchTopNews);
  const newsLoadingNews = useNewsStore(selectIsLoadingNews);
  const newsErrorNews = useNewsStore(selectErrorNews);
  const newsLoadingTopNews = useNewsStore(selectIsLoadingTopNews);
  const newsErrorTopNews = useNewsStore(selectErrorTopNews);
  const news = useNewsStore(selectNews);
  const topNews = useNewsStore(selectTopNews);

  const handleClose = () => {
    setOpenError(false);
  };

  useEffect(() => {
    fetchNews();
    fetchTopNews();
  }, []);

  return (
    <>
      <Container maxWidth="md" sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            p: "20px",
          }}
        >
          <Header typeHeader="search" />
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                p: "20px 0px",
              }}
            >
              <Typography variant="h5" fontWeight="900" color="secondary.dark">
                Hot Topics
              </Typography>
              {newsLoadingTopNews ? <Loading /> : <HotNews topNews={topNews} />}
            </Box>
            <Typography variant="h5" fontWeight="900" color="secondary.dark">
              Latest News
            </Typography>
            {newsLoadingNews ? <Loading /> : <GridNews news={news} />}

            {/* error */}
            {newsErrorNews != null || newsErrorTopNews != null ? (
              <Dialog onClose={handleClose} open={openError}>
                <DialogTitle>Error!</DialogTitle>
                <DialogContent>
                  {newsErrorNews != null ? newsErrorNews.message : ""}
                  {newsErrorTopNews != null ? newsErrorTopNews.message : ""}
                </DialogContent>
              </Dialog>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ p: 0 }}>
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;

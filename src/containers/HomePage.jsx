import React, { useEffect } from "react";
import Header from "../components/Header";
import GridNews from "../components/GridNews";
import HotNews from "../components/HotNews";
import Loading from "../components/Loading";
import Container from "@mui/material/Container";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";

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

const HomePage = () => {
  const [openError, setOpenError] = React.useState(true);

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
      <div className="p-4">
        <Header typeHeader="search" />
        <Container maxWidth="xl">
          <h1>Hot Topics</h1>
          {newsLoadingTopNews ? <Loading /> : <HotNews topNews={topNews} />}
          <h2>Latest News</h2>
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
        </Container>
      </div>
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListNews from "../components/ListNews";
import Loading from "../components/Loading";
import Container from "@mui/material/Container";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

import useNewsStore, {
  selectSearchNews,
  selectIsLoadingSearchNews,
  selectErrorSearchNews,
  selectFetchSearchNews,
} from "../stores/news";

const HomePage = () => {
  const [openError, setOpenError] = useState(true);
  const [pageApi, setPageApi] = useState(1);
  const params = useParams();

  const fetchSearchNews = useNewsStore(selectFetchSearchNews);
  const searchNews = useNewsStore(selectSearchNews);
  const isLoadingSearchNews = useNewsStore(selectIsLoadingSearchNews);
  const errorSearchNews = useNewsStore(selectErrorSearchNews);

  const handleClose = () => {
    setOpenError(false);
  };

  useEffect(() => {
    fetchSearchNews(Object.values(params)[0], pageApi);
  }, [pageApi, params]);
  return (
    <>
      <Box>
        <Header typeHeader="search" />
        <Container
          maxWidth="xl"
          sx={{
            minHeight: "100vh",
          }}
        >
          <h2>Result</h2>
          {isLoadingSearchNews ? (
            <Loading />
          ) : searchNews.results.length > 0 &&
            Object.values(params)[0] !== "" ? (
            <ListNews news={searchNews.results} />
          ) : (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                mb: "10px",
                mt: "10px",
                flexGrow: "1",
                textAlign: "center",
                fontFamily: "Playfair Display",
              }}
            >
              Not Found
            </Typography>
          )}

          {/* error */}
          {errorSearchNews != null ? (
            <Dialog onClose={handleClose} open={openError}>
              <DialogTitle>Error!</DialogTitle>
              <DialogContent>
                {errorSearchNews != null ? errorSearchNews.message : ""}
              </DialogContent>
            </Dialog>
          ) : (
            ""
          )}
        </Container>

        {searchNews.results.length > 0 ? (
          <Stack spacing={2} marginTop="50px">
            <Pagination
              count={searchNews.pages}
              showFirstButton
              showLastButton
              variant="outlined"
              shape="rounded"
              sx={{ marginX: "auto" }}
              onChange={(e, value) => setPageApi(value)}
            />
          </Stack>
        ) : (
          ""
        )}

        <Footer />
      </Box>
    </>
  );
};

export default HomePage;

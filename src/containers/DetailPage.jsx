import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Container from "@mui/material/Container";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import countTime from "../utils/countTime";

import useNewsStore, {
  selectDetailNews,
  selectIsLoadingDetailNews,
  selectErrorDetailNews,
  selectFetchDetailNews,
} from "../stores/news";

const DetailPage = () => {
  const [openError, setOpenError] = useState(true);
  const params = useParams();
  const fetchDetailNews = useNewsStore(selectFetchDetailNews);
  const newsLoadingDetailNews = useNewsStore(selectIsLoadingDetailNews);
  const newsErrorDetailNews = useNewsStore(selectErrorDetailNews);
  const newsDetail = useNewsStore(selectDetailNews);

  const handleClose = () => {
    setOpenError(false);
  };

  useEffect(() => {
    //auto top
    window.scrollTo(0, 0);

    fetchDetailNews(Object.values(params)[0]);
  }, []);

  return (
    <>
      <Container maxWidth="md" sx={{ overflow: "hidden" }}>
        <Box sx={{ p: "20px" }}>
          <Header typeHeader="back" />
          <Box sx={{ p: "40px 0px" }}>
            {newsLoadingDetailNews ? (
              <Loading />
            ) : (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${newsDetail.fields.thumbnail})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "420px",
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                />

                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{
                      width: "100%",
                      mb: "10px",
                      mt: "10px",
                      color: "black",
                    }}
                  >
                    {newsDetail.webTitle}
                  </Typography>
                  <Box
                    sx={{
                      color: "black",
                    }}
                  >
                    <Typography variant="caption" sx={{ mr: "15px" }}>
                      {newsDetail.webPublicationDate != null
                        ? countTime(newsDetail.webPublicationDate)
                        : ""}
                    </Typography>
                    <Typography variant="caption">
                      {newsDetail.fields.publication}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  sx={{
                    mt: "20px",
                    fontSize: "22px",
                    color: "black",
                    textAlign: "justify",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: newsDetail.fields.body,
                  }}
                ></Typography>
              </Box>
            )}

            {/* error */}
            {newsErrorDetailNews != null ? (
              <Dialog onClose={handleClose} open={openError}>
                <DialogTitle>Error!</DialogTitle>
                <DialogContent>{newsErrorDetailNews.message}</DialogContent>
              </Dialog>
            ) : (
              ""
            )}
          </Box>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default DetailPage;

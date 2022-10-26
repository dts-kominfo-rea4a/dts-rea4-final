import React, { useState, useEffect } from "react";
import Rectangle1 from "./Assets/Rectangle1.png";
import useNewsStore, { selectFetchNews, selectNewsApi } from "../../Store/news";
import { Typography, createTheme, ThemeProvider, Grid, Button } from "@mui/material";

const HomePage = ({ id }) => {
  //select action
  const fetchNews = useNewsStore(selectFetchNews);
  const news = useNewsStore(selectNewsApi);
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  //theme MUI
  const theme = createTheme({
    body1: {
      fontWeight: 700,
      fontStyle: "italic",
    },
  });
  const [end, setEnd] = useState(0);

  return (
    <div style={{ marginBottom: "100px" }}>
      <div style={{ display: "flex", paddingLeft: "2em", marginLeft: "1em" }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" font-weight="bold" font-family="Roboto">
            Hot Topics
          </Typography>
        </ThemeProvider>
      </div>
      {/* Hot Topics */}
      <div style={{ display: "flex" }}>
        <div>
          <section>
            <img src={Rectangle1} alt="Swim" style={{ display: "flex", paddingLeft: "2em", marginLeft: "1em", width: "800px", height: "400px" }} />
          </section>
        </div>
        <span style={{ display: "flex", marginBottom: "1em", paddingBottom: "1em" }}>
          <p style={{ fontFamily: "Playfair Display", fontSize: "50px", margin: "0", marginRight: "50px", paddingRight: "10px", paddingLeft: "10px", width: "50px", height: "50px" }}>Nisi,</p>
          <p style={{ fontFamily: "Playfair Display", fontSize: "26px", textAlign: "left" }}>
            sagittis aliquet sit
            <br /> rutrum. Nunc, id vestibulum <br /> quam ornare adipiscing. <br />
            Pellentesque sed turpis nunc
            <br /> gravida pharetra, sit nec vivamus <br />
            pharetra. Velit, dui, egestas nisi,
            <br /> elementum mattis mauris,
            <br /> magnis. Massa tortor nibh nulla <br />
            condimentum imperdiet <br />
            scelerisque
            <Grid container direction="column" alignItems="center" justifyContent="center">
              <Grid item xs={5}>
                <Button
                  onClick={() => setEnd(end + 2)}
                  variant="text"
                  sx={{
                    mt: 3,
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "16px",
                      letterSpacing: "1px",
                      color: "#1D94A8",
                    }}
                  >
                    ...Read More
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </p>
        </span>
      </div>
      {/* Latest News */}
      <div style={{ display: "flex", paddingLeft: "2em", marginLeft: "1em", marginBottom: "1em" }}>
        <Typography variant="h4" font-family="Roboto" font-style="normal" font-weight="Bold" font-size="36px" line-height="42px">
          Latest News
        </Typography>
      </div>
      {/* Card Content */}
      <div>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {news.map((berita) => (
            <>
              <div style={{ marginLeft: "3em", marginRight: "1em" }}>
                <a href={`/${berita.uuid}`} style={{ textDecoration: "none", color: "black" }}>
                  <div style={{ width: "270px" }}>
                    <img src={berita.image_url} alt="card1" width="270px" height="176px" />
                    <Typography variant="h5" fontFamily="Playfair-Display" fontSize="30px" textAlign="left" fontWeight="700" marginBottom="10px">
                      {berita.title}
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p style={{ margin: "5px" }}>{berita.published_at}</p>
                      <p style={{ margin: "5px" }}>{berita.source}</p>
                    </div>
                  </div>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

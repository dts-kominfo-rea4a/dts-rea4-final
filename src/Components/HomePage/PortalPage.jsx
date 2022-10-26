import React, { useEffect } from "react";
import useNewsStore, { selectFetchNews, selectNewsApi } from "../../Store/news";
import { Typography } from "@mui/material";
const PortalPage = ({ id }) => {
  const fetchNews = useNewsStore(selectFetchNews);
  const news = useNewsStore(selectNewsApi);
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {news.map((berita) => (
        <>
          <a href={`/${berita.uuid}`} style={{ textDecoration: "none", color: "black" }}>
            <div style={{ marginLeft: "3em", marginRight: "1em" }}>
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
            </div>
          </a>
        </>
      ))}
    </div>
  );
};

export default PortalPage;

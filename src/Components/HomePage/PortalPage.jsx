import React, { useEffect } from "react";
import useNewsStore, { selectFetchNews, selectNewsApi } from "../../Store/news";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const PortalPage = ({ id }) => {
  const fetchNews = useNewsStore(selectFetchNews);
  const news = useNewsStore(selectNewsApi);
  const navigate = useNavigate();
  const clickDetailHandler = () => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {news?.results?.map((berita) => (
        <>
          <Box onClick={clickDetailHandler} style={{ textDecoration: "none", color: "black", cursor: "pointer" }}>
            <div style={{ marginLeft: "3em", marginRight: "1em" }}>
              <div style={{ width: "270px" }}>
                <Typography variant="h5" fontFamily="Playfair-Display" fontSize="30px" textAlign="left" fontWeight="700" marginBottom="10px">
                  {berita.webTitle}
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ margin: "5px" }}>{berita.webPublicationDate}</p>
                  <p style={{ margin: "5px" }}>{berita.sectionName}</p>
                </div>
              </div>
            </div>
          </Box>
        </>
      ))}
    </div>
  );
};

export default PortalPage;

import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useNewsStore, { selectDetailNews, selectNewsApi } from "../../Store/news";

const DetailPage = () => {
  const { id } = useParams();
  console.log(id, "ini params");
  const news = useNewsStore(selectNewsApi);
  const detailNews = useNewsStore(selectDetailNews);
  console.log(detailNews, "detailNews");
  useEffect(() => {
    detailNews(id);
  }, [detailNews, id]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "2rem", marginBottom: "1rem" }}>
        <Typography variant="h3" font-weight="bold" font-family="Roboto">
          Hot Topics
        </Typography>
        <img src={news.image_url} alt="detail1" style={{ width: "1300px", height: "500px", marginRight: "2em" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "2em" }}>
        <Typography style={{ fontFamily: "Playfair Display", fontSize: "35px", fontWeight: "bold" }}>{news.title}</Typography>
        <div style={{ display: "flex", flexDirection: "row", fontSize: "15px", margin: "0" }}>
          <p style={{ marginRight: "27px" }}>{news.published_at}</p>
          <p>{news.source}</p>
        </div>
      </div>
      {/* Content Section */}
      <Typography style={{ fontFamily: "Playfair Display", fontSize: "35px" }}>{news.description}</Typography>
      <a href={news.url} style={{ textDecoration: "none", color: "black" }}>
        Read more
      </a>
    </div>
  );
};

export default DetailPage;

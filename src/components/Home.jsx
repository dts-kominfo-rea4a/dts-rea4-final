import { Box, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import useNewsStore, {
  selectFetchNews,
  selectLoading,
  selectNews,
} from "../stores/news";
import Cards from "./Card";

function Home(props) {
  // select action
  const fetchNews = useNewsStore(selectFetchNews);
  const news = useNewsStore(selectNews);
  const newsLoad = useNewsStore(selectLoading);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);
  return (
    <div style={{ margin: 2 }}>
      <Box sx={{ display: "flex" }}>
        {newsLoad ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "4rem",
              alignItems: "center",
              text: "center",
            }}
          >
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          </div>
        ) : (
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {news.map((news) => (
              <Cards
                img={news.image_url}
                title={news.title}
                key={news.uuid}
                desc={news.description}
                id={news.uuid}
              />
            ))}
          </ul>
        )}
      </Box>
    </div>
  );
}

export default Home;

import React from "react";
import Box from "@mui/material/Box";
import HotTopics from "../components/HotTopics";
import LatestNews from "../components/LatestNews";
import ContentSkeleton from "../components/ContentSkeleton";
import { useGetTopHeadlinesQuery } from "../services/newsApi";

const HomePage = () => {
  const { data, error, isLoading } = useGetTopHeadlinesQuery();

  return (
    <Box sx={{ marginBottom: 20 }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <ContentSkeleton />
      ) : data ? (
        <>
          <HotTopics data={data} />
          <LatestNews data={data} />
        </>
      ) : null}
    </Box>
  );
};

export default HomePage;

import React from "react";
import Box from "@mui/material/Box";
import HotTopics from "../components/HotTopics";
import LatestNews from "../components/LatestNews";

const HomePage = () => {
  return (
    <Box sx={{ marginBottom: 20 }}>
      <HotTopics />
      <LatestNews />
    </Box>
  );
};

export default HomePage;

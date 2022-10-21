import { Box } from "@mui/material";
import React from "react";
import HotTopics from "../components/HotTopics";

const HomePage = () => {
  return (
    <Box
      sx={{
        margin: {
          xs: 5,
          sm: 5,
          md: 10,
          lg: 10,
          xl: 10,
        },
      }}
    >
      <HotTopics />
    </Box>
  );
};

export default HomePage;

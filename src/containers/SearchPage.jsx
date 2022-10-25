import React from "react";
import Box from "@mui/material/Box";
import LatestNews from "../components/LatestNews";
import { useGetNewsBySearchQuery } from "../services/newsApi";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  let params = useParams();
  const { data, error, isLoading } = useGetNewsBySearchQuery(params.textSearch);

  return (
    <Box sx={{ marginBottom: 20 }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ p: 5 }}
            fontWeight={750}
          >
            Menampilkan hasil untuk: "{params.textSearch}"
          </Typography>
          <LatestNews data={data} />
        </>
      ) : null}
    </Box>
  );
};

export default HomePage;

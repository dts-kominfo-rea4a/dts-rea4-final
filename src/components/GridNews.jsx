import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import countTime from "../utils/countTime";

const Img = styled("img")(({ theme }) => ({
  height: "auto",
  width: "100%",
  borderRadius: "8px",
}));

const GridNews = ({ news }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {news.map((data) => (
        <Grid item xs={2} sm={4} md={3} key={data.id}>
          <Link
            to={"/content/" + data.id}
            style={{
              textDecoration: "none",
              display: "inline-block",
              marginTop: "10px",
              color: "black",
            }}
          >
            <Box sx={{ cursor: "pointer" }}>
              <Img src={data.fields.thumbnail} alt={data.webTitle} />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  mb: "10px",
                  mt: "10px",
                  fontFamily: "Playfair Display",
                }}
              >
                {data.webTitle}
              </Typography>
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mr: "15px" }}
                >
                  {data.webPublicationDate != null
                    ? countTime(data.webPublicationDate)
                    : ""}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {data.fields.publication}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridNews;

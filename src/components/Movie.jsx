import React from "react";
import {
  Grid,
  Box,
  Typography,
  Divider,
} from "@mui/material";

const MovieVertical = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/w1280/";

  return (
    <>
      {movie ? (
        <>
          <Box
            style={{
              backgroundImage: `url(${base_url + (movie.backdrop_path?movie.backdrop_path:movie.poster_path)})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "92vh",
              display: "flex",
              direction:"row",
            }}
          >
            <Grid
              container
              sx={{bottom:0, color: "white", backgroundColor: "rgba(0,0,0,0.6)", textAlign:"bottom", position:"absolute" }}
            >
              <Grid item xs={12} md={12} style={{ zIndex: 1, padding:10, margin:"20px" }}>
                <Typography variant="h5">{movie.title}</Typography>
                <Divider/>
                <Typography variant="subtitle">Overview</Typography>
                <Typography variant="body1">{movie.overview}</Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MovieVertical;

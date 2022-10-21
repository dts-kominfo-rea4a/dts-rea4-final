import React from "react";
import {
  Grid,
  Box,
  Typography,
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
              alignItems:"center",
              '&:after': {
                content: "",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.6)",
              },              
            }}
          >
            {/* <Box style={{ content: "",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.6)", }}></Box> */}
            <Grid
              container
              sx={{ ml: 10, mr: 10, alignItems: "bottom", color: "white" }}
            >
              <Grid item xs={12} md={9} style={{ zIndex: 1 }}>
                <Typography variant="h5">{movie.title}</Typography>
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

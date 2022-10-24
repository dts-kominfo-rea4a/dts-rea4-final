import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMovieStore, {
  selectMovies,
  selectTvs,
  selectError,
  selectIsLoading,
  selectFetchMovies,
  selectFetchTvs,
  selectTrendingMovies,
  selectedTrendingMovies,
} from "../stores/movie";

import { Box, Tabs, Typography, Card, Button } from "@mui/material";
import Carousel from "../components/Carousel";
import SimpleBackdrop from "../components/SimpleBackdrop";
import MovieCard from "../components/MovieCard";

function HomePage() {
  // select action
  const navigate = useNavigate();

  const fetchMovies = useMovieStore(selectFetchMovies);
  const fetchTvs = useMovieStore(selectFetchTvs);
  const movieLoading = useMovieStore(selectIsLoading);
  const movieError = useMovieStore(selectError);
  const movies = useMovieStore(selectMovies);
  const tvs = useMovieStore(selectTvs);
  const fetchTrendingMovies = useMovieStore(selectTrendingMovies);
  const trendingMovies = useMovieStore(selectedTrendingMovies);
  const movieClickHandler = (evt, id) => {
    navigate(`/movie/${id}`);
  };
  const tvClickHandler = (evt, id) => {
    navigate(`/tv/${id}`);
  };
  useEffect(() => {
    fetchTrendingMovies();
    fetchMovies();
    fetchTvs();
  }, []);
  return (
    <>
      <Carousel movies={trendingMovies} />
      <Box>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Typography variant="h5" style={{ margin: 10, paddingLeft: 30 }}>
            MOVIE
          </Typography>
          <Button style={{ right: 0 }} onClick={() => navigate("/movies")}>
            more
          </Button>
        </Box>
        {movieLoading ? (
          <SimpleBackdrop open={movieLoading} />
        ) : (
          <Tabs value={false} variant="scrollable" scrollButtons="auto">
            {movies
              ? movies.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} media={"movie"} />
                ))
              : ""}
          </Tabs>
        )}
      </Box>
      <Box>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Typography variant="h5" style={{ margin: 10, paddingLeft: 30 }}>
            TV
          </Typography>
          <Button style={{ right: 0 }} onClick={() => navigate("/tvs")}>
            more
          </Button>
        </Box>
        {!movieLoading ? (
          <Tabs value={false} variant="scrollable" scrollButtons="auto">
            {tvs
              ? tvs.map((tv) => (
                  <MovieCard movie={tv} key={tv.id} media={"tv"} />
                ))
              : ""}
          </Tabs>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
export default HomePage;

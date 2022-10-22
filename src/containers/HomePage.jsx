import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMovieStore, {
  selectMovies,
  selectError,
  selectIsLoading,
  selectFetchMovies,
  selectTrendingMovies,
  selectedTrendingMovies,
} from "../stores/movie";
import MovieVertical from "../components/MovieVertical";

import { Grid } from "@mui/material";
import Carousel from "../components/Carousel";
import SimpleBackdrop from "../components/SimpleBackdrop";

function HomePage() {
  // select action
  const fetchMovies = useMovieStore(selectFetchMovies);
  const movieLoading = useMovieStore(selectIsLoading);
  const movieError = useMovieStore(selectError);
  const movies = useMovieStore(selectMovies);
  const fetchTrendingMovies = useMovieStore(selectTrendingMovies);
  const trendingMovies = useMovieStore(selectedTrendingMovies);
  useEffect(() => {
    // fetchMovies();
    fetchTrendingMovies();
  }, []);
  return (
    <>
      <Carousel movies={trendingMovies}/>
      {movieLoading ? (
        <SimpleBackdrop open={movieLoading}/>
      ) : (
        <Grid container rowSpacing={2} alignContent={"center"} margin={"auto"}>
          {movies.map((movie) => (
            <Grid item key={movie.id}>
              <Link component="div" to={`movies/${movie.id}`}>
                <MovieVertical movie={movie}></MovieVertical>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
export default HomePage;

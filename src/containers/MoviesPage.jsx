import React, { useEffect, useState } from "react";
import useMovieStore, {
  selectMovies,
  selectError,
  selectIsLoading,
  selectFetchMovies,
} from "../stores/movie";
import MovieVertical from "../components/MovieVertical";

import { Grid } from "@mui/material";
// Import Link dan Outlet di sini
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import SimpleBackdrop from "../components/SimpleBackdrop";

function MoviesPage() {
  // select action
  const fetchMovies = useMovieStore(selectFetchMovies);
  const movieLoading = useMovieStore(selectIsLoading);
  const movieError = useMovieStore(selectError);
  const movies = useMovieStore(selectMovies);
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
    <NavBar/>
    <div>
        {/* Jangan lupa gunakan outlet di sini (anggap seperti slot yang bisa dimasukkan apa saja) */}
        <Outlet />
      </div>
      {movieLoading ? (
        <SimpleBackdrop open={movieLoading}/>
      ) : (
        <Grid container rowSpacing={2} alignContent={"center"} margin={"auto"}>
          {movies.map((movie) => (
            <Grid item key={movie.id}>
              <Link component="div" to={`movie/${movie.id}`}>
                <MovieVertical movie={movie}></MovieVertical>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
export default MoviesPage;

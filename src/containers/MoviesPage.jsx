import React, { useEffect, useState } from "react";
import useMovieStore, {
  selectMovies,
  selectError,
  selectIsLoading,
  selectFetchMoviesByCategory,
  selectTotalPages,
} from "../stores/movie";
import MovieVertical from "../components/MovieVertical";

import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography,
  Pagination,
  Stack,
} from "@mui/material";
// Import Link dan Outlet di sini
import { Link, Outlet, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SimpleBackdrop from "../components/SimpleBackdrop";

function MoviesPage() {
  // select action
  const fetchMovies = useMovieStore(selectFetchMoviesByCategory);
  const movieLoading = useMovieStore(selectIsLoading);
  const movieError = useMovieStore(selectError);
  const movies = useMovieStore(selectMovies);
  const totalPage = useMovieStore(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const categoris = [
    "popular",
    "upcoming",
    "top_rated",
    "now_playing"
  ];
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    fetchMovies(categoris[value], 1);
  }, [value]);
  useEffect(() => {
    fetchMovies(categoris[value], currentPage);
  }, [currentPage]);
  return (
    <>
      <NavBar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            aria-label="Category"
            variant="scrollable"
            scrollButtons="auto"
          >
            {categoris.map((data) => (
              <Tab
                label={data.replace("_", " ")}
                id={categoris.indexOf(data)}
                key={categoris.indexOf(data)}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
      {movieLoading ? (
        <SimpleBackdrop open={movieLoading} />
      ) : (
        <>
          <Box style={{ margin: 2 }}>
            <Stack
              spacing={2}
              style={{ margin: 5, right: 0, alignItems: "center" }}
            >
              <Pagination page={currentPage} onChange={(evt, value) => setCurrentPage(value)} count={totalPage} size="medium" color="primary" />
            </Stack>

            <Grid
              container
              rowSpacing={2}
              alignContent={"center"}
              margin={"auto"}
              top={2}
            >
              {movies.map((movie) => (
                <Grid item key={movie.id}>
                  <Link component="div" to={`/movie/${movie.id}`}>
                    <MovieVertical movie={movie}></MovieVertical>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}
export default MoviesPage;

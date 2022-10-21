import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieStore, {
  selectResetSearchedMovies,
  selectedMovie,
  selectDetailMovie,
} from "../stores/movie";

import NavBar from "../components/NavBar";
import Movie from "../components/Movie";
import NoMatch from "./NoMatchPage";

const MovieDetail = () => {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);
  const selectMovie = useMovieStore(selectDetailMovie);
  const detailMovie = useMovieStore(selectedMovie);
  const resetSearchedMovie = useMovieStore(selectResetSearchedMovies);
  useEffect(() => {
    resetSearchedMovie();
    selectMovie(params.id)
    setLoaded(true);
  }, [params.id]);
  return (
    <>
      <div className="App">
        <NavBar />
        {loaded?<Movie movie={detailMovie} />:""}
      </div>
    </>
  );
};

export default MovieDetail;

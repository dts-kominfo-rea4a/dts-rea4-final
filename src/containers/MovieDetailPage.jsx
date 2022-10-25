import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieStore, {
  selectedMovie,
  selectDetailMovie,
  selectIsLoading,
  selectVideos,
  selectFetchVideos
} from "../stores/movie";

import NavBar from "../components/NavBar";
import Movie from "../components/Movie";
import NotFound from "../components/NotFound";
import SimpleBackdrop from "../components/SimpleBackdrop";

const MovieDetailPage = () => {
  const params = useParams();
  const selectMovie = useMovieStore(selectDetailMovie);
  const detailMovie = useMovieStore(selectedMovie);
  const isLoading   = useMovieStore(selectIsLoading);
  const videos   = useMovieStore(selectVideos);
  const fetchVideo   = useMovieStore(selectFetchVideos);
  useEffect(() => {
    selectMovie(params.id);
    fetchVideo("movie",params.id);
  }, [params.id]);
  return (
    <>
      <div className="App">
        <NavBar />
        {isLoading?<SimpleBackdrop open={isLoading} /> :detailMovie?<Movie movie={detailMovie} videos={videos} />:<NotFound/>}
      </div>
    </>
  );
};

export default MovieDetailPage;

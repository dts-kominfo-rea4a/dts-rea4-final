import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieStore, {
  selectedMovie,
  selectDetailMovie,
  selectIsLoading
} from "../stores/movie";

import NavBar from "../components/NavBar";
import Movie from "../components/Movie";
import NotFound from "../components/NotFound";
import SimpleBackdrop from "../components/SimpleBackdrop";

const MovieDetailPage = () => {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);
  const selectMovie = useMovieStore(selectDetailMovie);
  const detailMovie = useMovieStore(selectedMovie);
  const isLoading   = useMovieStore(selectIsLoading);
  useEffect(() => {
    selectMovie(params.id)
    setLoaded(true);
  }, [params.id]);
  return (
    <>
      <div className="App">
        <NavBar />
        {isLoading?<SimpleBackdrop open={isLoading} /> :detailMovie?<Movie movie={detailMovie} />:<NotFound/>}
      </div>
    </>
  );
};

export default MovieDetailPage;

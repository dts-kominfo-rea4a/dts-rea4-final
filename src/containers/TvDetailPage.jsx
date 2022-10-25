import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieStore, {
  selectedTv,
  selectDetailTv,
  selectIsLoading,
  selectFetchVideos, 
  selectVideos
} from "../stores/movie";

import NavBar from "../components/NavBar";
import Tv from "../components/Tv";
import NotFound from "../components/NotFound";
import SimpleBackdrop from "../components/SimpleBackdrop";

const TvDetailPage = () => {
  const params = useParams();
  const selectTv = useMovieStore(selectDetailTv);
  const detailTv = useMovieStore(selectedTv);
  const isLoading   = useMovieStore(selectIsLoading);
  const videos   = useMovieStore(selectVideos);
  const fetchVideo   = useMovieStore(selectFetchVideos);
  useEffect(() => {
    selectTv(params.id);
    fetchVideo("tv",params.id)
  }, [params.id]);
  return (
    <>
      <div className="App">
        <NavBar />
        {isLoading?<SimpleBackdrop open={isLoading} /> :detailTv?<Tv tv={detailTv} videos={videos} />:<NotFound/>}
      </div>
    </>
  );
};

export default TvDetailPage;

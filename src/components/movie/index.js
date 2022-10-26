import React, { useState, useEffect } from "react";
import "../../styles/movie/movie.module.css";
import { usePopularMoviesQuery } from "../../service/theMovieDBApi";
import Products from "../product";

export default function Movies() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePopularMoviesQuery(page);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {error ? (
        <p>an error occured</p>
      ) : (
        <Products movies={data} handleChange={handleChange} />
      )}
    </>
  );
}

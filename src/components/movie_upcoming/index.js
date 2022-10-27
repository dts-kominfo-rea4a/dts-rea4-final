import React, { useState, useEffect } from "react";
import "../../styles/movie/movie.module.css";
import { useUpcomingMoviesQuery } from "../../service/theMovieDBApi";
import Products from "../product";

export default function UpcomingMovie() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useUpcomingMoviesQuery(page);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      {error ? (
        <p>an error occured</p>
      ) : (
        <Products
          movies={data}
          handleChange={handleChange}
          category="upcoming"
        />
      )}
    </>
  );
}

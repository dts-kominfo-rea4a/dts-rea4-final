import React, { useState, useEffect } from "react";
import "../../styles/movie/movie.module.css";
import { usePopularMoviesQuery } from "../../service/theMovieDBApi";
import Products from "../product";

export default function Movies() {
  const { data, error, isLoading } = usePopularMoviesQuery();

  useEffect(() => {
    console.log("movies : " + data);
  }, []);

  return (
    <>{error ? <p>an error occured</p> : <Products movies={data?.results} />}</>
  );
}

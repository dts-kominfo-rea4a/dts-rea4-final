import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import { Link } from "react-router-dom";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/w342";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);

                return request;
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [fetchUrl]);

    // console.log(movies);

    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.backdrop_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <Link
                  to={"/movie/" + movie.id}
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                >
                  <img
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                </Link>
              )
          )}
        </div>
      </div>
    );
};

export default Row;

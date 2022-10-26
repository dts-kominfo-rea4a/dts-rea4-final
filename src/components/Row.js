import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import IconButton from "@mui/material/IconButton";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddToList from "./AddToList";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/w342";
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight:1,
      // centerMode: 1,
      // centerPadding: "-20px",
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
    };

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

        <Slider {...settings} className="slider-row row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.backdrop_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <div className="row__poster" key={movie.id}>
                  <div className="movie-link">
                    <IconButton
                      href={"/movie/" + movie.id}
                      aria-label="delete"
                      size="large"
                    >
                      <SmartDisplayIcon fontSize="large" />
                    </IconButton>
                    <AddToList movie={movie} />
                  </div>

                  <img
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                </div>
              )
          )}
        </Slider>
      </div>
    );
};

export default Row;

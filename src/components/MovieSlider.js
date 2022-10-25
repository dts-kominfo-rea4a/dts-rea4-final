import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./Banner.css";


import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSlider = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: 1,
    centerPadding: "30px",    
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      /* // get random json
      const random =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];

      // add genre data to json
      const getGenres = await axios.get(requests.getGenres);
      const movieGenre = random?.genre_ids;
      let genres = [];
      getGenres.data.genres.forEach((genre) => {
        if (movieGenre.includes(genre.id)) {
          genres.push(genre);
        }
      }); */

      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchUrl]);

  

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <>
      <Slider {...settings} className="slider-banner">
        {movies.map((movie) => (
            <div key={movie.id}>
                <div
                    className="banner"
                    style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/w780${movie?.backdrop_path}")`,
                    }}
                >
                    <div className="banner__contents">
                    <Link
                        href={`/movie/${movie?.id}`}
                        sx={{ color: "#fff", textDecoration: "none" }}
                    >
                        <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                        </h1>
                    </Link>

                    {/* <ul className="banner__genree">
                            {movie.genres?.map((genre) => (
                                <li key={genre?.id}>{genre?.name}</li>
                            ))}
                        </ul> */}
                    <p className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </p>
                    <Stack direction="row" spacing={2}>
                        <Button
                        href={`/movie/${movie?.id}`}
                        variant="contained"
                        className="play-button"
                        startIcon={<PlayArrowIcon />}
                        size="large"
                        >
                        Play
                        </Button>
                    </Stack>
                    </div>

                    <div className="banner--fadeBottom" />
                </div>

            </div>
        ))}
      </Slider>
    </>
  );
};

export default MovieSlider;

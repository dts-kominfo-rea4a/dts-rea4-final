import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useTmdbStore, { selectFetchMovies } from "../stores/tmdb";

function Row({ title, category, selector }) {
  const fetchMovies = useTmdbStore(selectFetchMovies);
  const movies = useTmdbStore(selector);

  const sliderSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetchMovies(category);
  }, [fetchMovies, category]);

  return (
    <div className="px-6 xs:px-12 lg:px-14 pt-5">
      <h3 className="mb-2 text-xl">{title}</h3>
      <Slider {...sliderSetting}>
        {movies.map((movie) => (
          <Link to={`/detail/movie/${movie.id}`} key={movie.id}>
            <div className="h-full w-full relative px-1 hover:scale-105">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                alt={movie.title}
                className="h-full w-full"
              />
              <div className="absolute top-0 pt-4 h-full w-full bg-gradient-to-b from-black/80 to-black/30 px-4 py-2 opacity-0 hover:opacity-100">
                <h4 className="text-xs">{movie.title}</h4>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Row;

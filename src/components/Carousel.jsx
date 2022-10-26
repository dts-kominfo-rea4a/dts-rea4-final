import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Carousel.module.css";
const Carousel = ({ movies }) => {
  // show the movie with this index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(movies.length);

  const navigate = useNavigate();

  // move to the next movie
  // if we are at the end, go to the first movie
  const next = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % movies.length);
  };

  // move to the previous movie
  // if we are at the beginning, go to the last movie
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + movies.length) % movies.length);
  };
  const imageClicked = (id) => {
    navigate(`/movie/${id}`);
  };
  const dotClicked = (id) => {
    setCurrentIndex(id);
  };
  let timer;
  const updateCount = () => {
    timer =
      !timer &&
      setInterval(() => {
        next();
      }, 5000);
  };
  useEffect(() => {
    if (timer) clearInterval(timer);
    if (movies.length > 0) updateCount();
  }, [movies.length]);

  return (
    <>
      {/* Render the carousel */}
      <div className={styles.slidercontainer}>
        {movies
          ? movies.map((movie) => (
              <div
                key={movie.id}
                // if the movie is the current movie, show it
                className={
                  movies[currentIndex]
                    ? movies[currentIndex].id === movie.id
                      ? styles.fade
                      : styles.slidefade
                    : styles.slidefade
                }
              >
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
                  }
                  alt={movie.title}
                  className={styles.movie}
                  onClick={() => imageClicked(movie.id)}
                />
                <div className={styles.caption}>{movie.title}</div>
              </div>
            ))
          : ""}

        {/* Previous button */}
        <button onClick={prev} className={styles.prev}>
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className={styles.next}>
          &gt;
        </button>
      </div>

      {/* Render dots indicator */}
      <div className={styles.dots}>
        {movies
          ? movies.map((movie) => (
              <span
                key={movie.id}
                // highlight the dot that corresponds to the current movie
                className={
                  movies[currentIndex]
                    ? movies[currentIndex].id === movie.id
                      ? styles.dotactive
                      : styles.dot
                    : styles.dot
                }
                // when the user clicks on a dot, go to the corresponding movie
                onClick={() => dotClicked(movie.id)}
              />
            ))
          : ""}
      </div>
    </>
  );
};

export default Carousel;

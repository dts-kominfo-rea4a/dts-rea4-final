import React from "react";
import "./MovieDetail.css";

import Nav from "../components/Nav";
import Row from "../components/Row";

import requests from "../Requests";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const MovieDetail = ({ select }) => {
  const [details, setDetails] = useState({});

  let params = useParams();
  
  const MY_API_KEY = "ead655b7daa5e197959b5e726f5833ab";
  useEffect(() => {
    const fetchDetails = async () => {
      if (params.name) {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${params.name}?api_key=${MY_API_KEY}&language=en-US`
        );
        const detailData = await data.json();
        setDetails(detailData);
      } 
    };

    fetchDetails();
  }, [params.name]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <div className="homeScreen">
      <Nav />

      <header
        className="single-movie"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${details?.backdrop_path}")`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {details?.title || details?.name || details?.original_name}
          </h1>
          <ul className="banner__genree">
            {details.genres?.map((genre) => (
              <li key={genre?.id}>{genre?.name}</li>
            ))}
          </ul>
          <p className="banner__description">
            {truncate(details?.overview, 150)}
          </p>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              className="play-button"
              startIcon={<PlayArrowIcon />}
              size="large"
            >
              Play
            </Button>
            <Button
              variant="contained"
              className="info-button"
              startIcon={<InfoOutlinedIcon />}
              size="large"
            >
              More information
            </Button>
          </Stack>
        </div>

        <div className="banner--fadeBottom" />
      </header>

      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Original"
        fetchUrl={requests.fetchMetflixOriginals}
        isLargeRow
      />
      <Row title="Action Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default MovieDetail;

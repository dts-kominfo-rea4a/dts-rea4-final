import React from "react";
import "./HomeScreen.css";

import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";

import requests from "../Requests";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "../axios";

// import { useNavigate } from "react-router-dom";

const HomeScreen = ({select}) => {
    
    const [details, setDetails] = useState({});
    
    let params = useParams();
    const is_single = params.name ? true : false;
    const MY_API_KEY = "ead655b7daa5e197959b5e726f5833ab";

    useEffect(() => {
      const fetchDetails = async () => {
        if (params.name) {
          const data = await fetch(
            `https://api.themoviedb.org/3/movie/${params.name}?api_key=${MY_API_KEY}&language=en-US`
          );
          const detailData = await data.json();
          setDetails(detailData);
        } else {
          const fetchData = async () => {
            try {
              const getGenres = await axios.get(requests.getGenres);
              const request = await axios.get(requests.fetchTrending);
              const random = request.data.results[
                  Math.floor(Math.random() * request.data.results.length - 1)
                ];
              
              const movieGenre = random.genre_ids;
              let genres = [];
              // eslint-disable-next-line array-callback-return
              getGenres.data.genres.map((genre) =>
                {                  
                  if (movieGenre.includes(genre.id)) {
                    genres.push(genre);
                  }
                }
              );
                
              setDetails({
                ...random,
                genres: genres
              });
              return request;
            } catch (error) {
              console.log(error);
            }
          };

          fetchData();
        }
      };

      fetchDetails();
    }, [params.name]);
    
   
    return (
      <div className="homeScreen">
        <Nav />
        <Banner select={details} is_single={is_single} />

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

export default HomeScreen;

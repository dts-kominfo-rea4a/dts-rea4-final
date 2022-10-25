import React from "react";
import "./HomeScreen.css";

import Nav from "../components/Nav";
import MovieSlider from "../components/MovieSlider";
import Row from "../components/Row";

import requests from "../Requests";
import Footer from "../components/footer";

const HomeScreen = ({select}) => {   
   
    return (
      <div className="homeScreen">
        <Nav />
        <MovieSlider fetchUrl={requests.fetchTrending} />
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
        <Footer />
      </div>     
    );
};

export default HomeScreen;

import React from "react";
import "./HomeScreen.css";

import Nav from "../components/Nav";
import MovieSlider from "../components/MovieSlider";
import Row from "../components/Row";

import requests from "../Requests";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

const CategoryScreen = ({ select }) => {
    let params = useParams();
    let title, url;
    if (params.cat === "series") {
        title = "Series";
        url = requests.fetchTVSeries;
    } else if (params.cat === "movies") {
        title = "Movies";
        url = requests.fetchTrending;
        
    } else {
        title = "New and popular";
        url = requests.fetchPopular;

    }
    
    return (
      <div className="homeScreen">
        <Nav />
        <MovieSlider fetchUrl={url} />
        <Row title={`${title} collections`} fetchUrl={url} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row
          title="Original"
          fetchUrl={requests.fetchMetflixOriginals}
          isLargeRow
        />
        <Footer />
      </div>
    );
};

export default CategoryScreen;

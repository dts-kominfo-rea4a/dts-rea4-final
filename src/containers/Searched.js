import React from "react";
import { useParams } from "react-router-dom";
import "./Searched.css";
import Nav from "../components/Nav";
import MovieSlider from "../components/MovieSlider";
import Row from "../components/Row";
import requests from "../Requests";
import Footer from "../components/footer";


const Searched = () => {
//   const [banner, setBanner] = useState({});
//   const [searchMovies, setSearchMovies] = useState([]);
  let params = useParams();  
  const MY_API_KEY = "ead655b7daa5e197959b5e726f5833ab";

  return (
    <div className="homeScreen">
      <Nav />
      <MovieSlider
        fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${params.search}`}
      />

      <Row
        title={`Search result for "${params.search}"`}
        fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${params.search}`}
        isLargeRow
      />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Original"
        fetchUrl={requests.fetchMetflixOriginals}
        isLargeRow
      />
      <Footer/>
    </div>
  );
};


export default Searched;

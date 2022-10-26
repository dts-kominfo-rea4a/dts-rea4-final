import React, {useState, useEffect} from "react";
import axios from '../api/axios';
import requests from "../stores/requests";
import './Banner.css';

function Banner () {
    const [movie, setMovie] = useState ([]);

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
        }
        fetchData();
    },[]);

    console.log(movie);

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
            }}
            >
            <div className="contents_banner" >
            <h1 className="title_banner">
                {movie?.title || movie?.name || movie?.original_name} 
            </h1>
                    <div className="buttons_banner">

                        <button className="button_banner"> Play </button>
                        <button className="button_banner"> Watch Trailer </button>

                    </div>
                <h1 className="description_banner"> {movie?.overview}

                </h1>
            </div>
            <div className="fade--banner"/>
            

        </header>
    )
}

export default Banner;
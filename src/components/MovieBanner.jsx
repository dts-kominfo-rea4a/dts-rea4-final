import React from "react";
//npm install react-material-ui-carousel --save
import Carousel from "react-material-ui-carousel";
import CardMovieBanner from "./CardMovieBanner";

const MovieBanner = ({movies}) => {
    const filtered_movies = movies.filter(movie => movie.media_type !== "person" && 
        (movie.backdrop_path !== null || movie.poster_path !== null)
    );

    return (
        <Carousel indicators={false} sx={{width:'90%', marginTop:'114px'}}>
            {
                filtered_movies?.map((movie) => (
                    <CardMovieBanner movie={movie} key={movie.id} />
                ))
            }
        </Carousel>
    )
}

export default MovieBanner;
import React from "react";
//npm install react-material-ui-carousel --save
import Carousel from "react-material-ui-carousel";
import CardMovieBanner from "./CardMovieBanner";

const MovieBanner = ({movies}) => {
    return (
        <Carousel indicators={false} sx={{width:'90%'}}>
            {
                movies.map((movie) => (
                    <CardMovieBanner movie={movie} key={movie.id} />
                ))
            }
        </Carousel>
    )
}

export default MovieBanner;
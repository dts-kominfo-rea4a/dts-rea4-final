import React from "react";
import {
    Card
    ,CardMedia
} from "@mui/material";


const CardMovieList = ({movie}) => {
    const base_url_img = "https://image.tmdb.org/t/p/w185";

    return (
        <Card>
            <CardMedia
                component="img"
                image={`${base_url_img}${movie.poster_path}`}
                alt={movie.title}
                sx={{width:1, maxWidth:185, height:1}}>
            </CardMedia>
        </Card>
    )
};

export default CardMovieList;
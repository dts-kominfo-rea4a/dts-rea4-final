import React from "react";
import {
    Card
    ,CardMedia
    ,CardActionArea
    ,Tooltip
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardMovieList = ({movie}) => {
    const navigate = useNavigate();
    const base_url_img = "https://image.tmdb.org/t/p/w185";

    const movieOnClick = (id) =>{
        navigate("/viewmovie", {
            state:{ movieid:id }
        });
    }

    const getTitle = () => {
        return movie.title ? movie.title : movie.name;
    }

    return (
        <Card>
            <Tooltip title={movie.id + " - " + getTitle()} placement="bottom" arrow={true}>
                <CardActionArea onClick={() => movieOnClick(movie.id)}>
                    <CardMedia
                        component="img"
                        image={`${base_url_img}${movie.poster_path}`}
                        alt={movie.title}
                        sx={{width:1, maxWidth:185, height:1}}>
                    </CardMedia>
                </CardActionArea>
            </Tooltip>
        </Card>
    )
};

export default CardMovieList;
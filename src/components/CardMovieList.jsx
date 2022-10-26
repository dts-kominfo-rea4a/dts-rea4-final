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

    const isPerson = () => {
        if(movie.media_type === "person"){
            return true;
        }else{
            return false;
        }
    }
    const getImageUrl = () => {
        return "https://image.tmdb.org/t/p/w185" + (isPerson() ? movie.profile_path : movie.poster_path);
    }

    const movieOnClick = (id) =>{
        if(!isPerson()){
            navigate("/viewmovie", {
                state:{ movieid:id, movietype:(movie.title ? "movie" : "tv") }
            });
        }
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
                        image={getImageUrl()}
                        alt={getTitle()}
                        sx={{width:1, maxWidth:185, height:1}}>
                    </CardMedia>
                </CardActionArea>
            </Tooltip>
        </Card>
    )
};

export default CardMovieList;
import React from "react";

import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button
} from "@mui/material";
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from "react-router-dom";
import Cover from "../assets/Cover.png";

const CardViewMovie = ({movie}) => {
    const navigate = useNavigate();
    const base_url_img = "https://image.tmdb.org/t/p/original";

    const playOnClick = (id) => {
        navigate("/playmovie", {
            state:{ movieid:id }
        });
    }

    // console.log(movie);

    return (
        <Card sx={{marginTop:'114px'}}>
            <Box sx={{display:'flex', justifyContent:'flex-start', position:'absolute'}}>
                <CardContent sx={{marginLeft:'30px', marginTop:'130px', color:'white'}}>
                    <Typography component="div" variant="h3">{(movie.title ? movie.title : movie.name)}</Typography><br/>
                    <Typography component="div" variant="h5" sx={{width:'80%'}}>{movie.overview}</Typography><br/>
                    {
                        movie.backdrop_path ? (
                            <>
                                <Button size="large" variant="contained" onClick={() => playOnClick(movie.id)} startIcon={<PlayArrowSharpIcon />} sx={{marginRight:'10px', bgcolor:'white', color:'black', "&:hover":{bgcolor:'red'}}}>Play</Button>
                                <Button size="large" startIcon={<InfoOutlinedIcon />} sx={{bgcolor:'grey', opacity:'90%', color:'white', "&:hover":{bgcolor:'red'}}}>More Information</Button>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </CardContent>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <CardMedia
                    component="img"
                    image={movie.backdrop_path ? `${base_url_img}${movie.backdrop_path}` : Cover}
                    alt={movie.title}
                    sx={{width:1, maxWidth:1480, height:1}}>
                </CardMedia>
            </Box>
        </Card>
    )
};

export default CardViewMovie;
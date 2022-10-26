import React from "react";
//npm i date-fns
import {
    Box
    ,Card
    ,CardMedia
    ,CardContent
    ,CardActionArea
    ,Rating
    ,Typography
    ,Tooltip
} from "@mui/material";
import {format, parse} from "date-fns";
import { useNavigate } from "react-router-dom";

const CardMovieBanner = ({movie}) => {
    const navigate = useNavigate();
    const styleCard = {
        width: '92.50%',
        height: '439px',
        background: 'linear-gradient(90.09deg, #000000 58.87%, rgba(217, 217, 217, 0) 84.92%)',
        color: 'white',
        position: 'absolute',
    };

    const base_url_img = "https://image.tmdb.org/t/p/w780";

    const format_date = (str_date) => {
        if(str_date !== undefined){
            const parsed_date = parse(str_date, 'yyyy-MM-dd', new Date());
            return format(parsed_date, 'dd MMM yyyy');
        }else{
            return "";
        }
    }

    const movieOnClick = (id) =>{
        navigate("/viewmovie", {
            state:{ movieid:id, movietype:(movie.title ? "movie" : "tv") }
        });
    }

    const getTitle = () => {
        return movie.title ? movie.title : movie.name;
    }
    const getReleaseDate = () => {
        return movie.release_date ? movie.release_date : movie.first_air_date;
    }

    return (
        <Card>
            <Tooltip title={movie.id + " - " + getTitle()} placement="top" arrow={true} followCursor={true}>
                <CardActionArea onClick={() => movieOnClick(movie.id)}>
                    <Box style={styleCard} sx={{display:'flex', justifyContent:'flex-start'}}>
                        <CardContent sx={{marginLeft:'30px', marginTop:'30px'}}>
                            <Typography component="div" variant="h4">{getTitle()}</Typography><br/>
                            <Typography variant="subtitle2" component="div" sx={{width:'55%'}}>{movie.overview}</Typography><br/>
                            <Typography variant="subtitle1">Release date: {format_date(getReleaseDate())}</Typography>
                            <Rating value={movie.vote_average /2} precision={0.1} readOnly></Rating>
                        </CardContent>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', paddingLeft:'550px'}}>
                        <CardMedia
                            component="img"
                            image={`${base_url_img}${movie.backdrop_path}`}
                            alt={movie.title}
                            sx={{width:1, maxWidth:780, height:1, maxHeight:439}}>
                        </CardMedia>
                    </Box>
                </CardActionArea>
            </Tooltip>
        </Card>
    )
}

export default CardMovieBanner;
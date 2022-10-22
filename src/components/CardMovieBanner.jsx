import React from "react";
import {
    Box
    ,Card
    ,CardMedia
    ,CardContent
    ,Rating
    ,Typography
} from "@mui/material";
import {format, parse} from "date-fns";

const CardMovieBanner = ({movie}) => {
    const styleCard = {
        width: '1050px',
        height: '439px',
        background: 'linear-gradient(90.09deg, #000000 55.87%, rgba(217, 217, 217, 0) 84.92%)',
        color: 'white',
        position: 'absolute',
    };

    const base_url_img = "https://image.tmdb.org/t/p/w780";

    const format_date = (str_date) => {
        const parsed_date = parse(str_date, 'yyyy-MM-dd', new Date());
        return format(parsed_date, 'dd MMM yyyy');
    }

    return (
        <Card>
            <Box style={styleCard} sx={{display:'flex', justifyContent:'flex-start'}}>
                <CardContent sx={{marginLeft:'30px', marginTop:'30px'}}>
                    <Typography component="div" variant="h4">{movie.title}</Typography><br/>
                    <Typography variant="subtitle2" component="div" sx={{width:'55%'}}>{movie.overview}</Typography><br/>
                    <Typography variant="subtitle1">Release date: {format_date(movie.release_date)}</Typography>
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
        </Card>
    )
}

export default CardMovieBanner;
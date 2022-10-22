import React from "react";

import {
    Box,
    Card,
    CardMedia,
    CardContent,
    LinearProgress,
} from "@mui/material";
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import OpenInFullSharpIcon from '@mui/icons-material/OpenInFullSharp';

import prev from "../assets/prev.png";
import next from "../assets/next.png";

const CardPlayMovie = ({movie}) => {
    const base_url_img = "https://image.tmdb.org/t/p/original";

    return (
        <Card sx={{marginTop:'114px', bgcolor:'#141414'}}>
            <Box sx={{width:'100%'}}>
                <Box sx={{display: 'flex', justifyContent: 'flex-end', position:'absolute', marginTop:'750px'}}>
                    <CardContent sx={{color:'white'}}>
                        <LinearProgress variant="determinate" value={20} sx={{marginBottom:'10px', bgcolor:'black', colorScheme:'red', width:'1450px'}} />
                        <Box sx={{display:'flex', flexDirection:'row'}}>
                            <PlayArrowSharpIcon fontSize="large" />
                            <img src={prev} alt="prev" width='47px' height='24px' style={{marginTop:'5px', marginLeft:'15px', marginRight:'10px'}} />
                            <img src={next} alt="next" width='47px' height='24px' style={{marginTop:'5px', marginRight:'15px'}} />
                            <VolumeUpRoundedIcon fontSize="large" />
                            <LinearProgress variant="determinate" value={90} sx={{bgcolor:'black', width:'100px', marginLeft:'15px', marginTop:'15px'}} />
                            <OpenInFullSharpIcon fontSize="large" sx={{marginLeft:'1090px'}} />
                        </Box>
                    </CardContent>
                </Box>
                <Box sx={{display:'flex', justifyContent:'flex-start'}}>
                    <CardMedia
                        component="img"
                        image={`${base_url_img}${movie.backdrop_path}`}
                        alt={movie.title}
                        sx={{width:1, maxWidth:1480, height:1}}>
                    </CardMedia>
                </Box>
            </Box>
        </Card>
    )
};

export default CardPlayMovie;
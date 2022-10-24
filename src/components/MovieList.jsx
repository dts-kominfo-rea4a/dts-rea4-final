import React from "react";
//npm install react-multi-carousel --save
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardMovieList from "./CardMovieList";
import CardMovieSearch from "./CardMovieSearch";
import {
    Box,
    Typography
} from '@mui/material';
import { useLocation } from "react-router-dom";

const MovieList = ({movies, title}) => {
    const location = useLocation();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 9,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 7,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 6,
            slidesToSlide: 1
        }
    };

    const responsive_large = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1
        }
    };

    const isSearch = () => {
        if(location.pathname === "/search"){
            return true;
        }else{
            return false;
        }
    }

    return (
        <Box sx={{width:'90%', marginTop:'20px', bgcolor:'inherit'}}>
            <Typography variant="h5" sx={{color:'white'}}>{title}</Typography>
            <Carousel showDots={false}
                arrows={true}
                infinite={true}
                draggable={false}
                swappable={false}
                centerMode={true}
                autoPlay={false}
                responsive={isSearch() ? responsive_large : responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px">
                {
                    movies?.map((movie) => (
                        isSearch() ? (
                            <CardMovieSearch movie={movie} key={movie.id} />
                        ) : (
                            <CardMovieList movie={movie} key={movie.id} />
                        )
                    ))
                }
            </Carousel>
        </Box>
    )
};

export default MovieList;
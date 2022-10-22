import React from "react";
// import { useNavigate } from "react-router-dom";

// import {logoutUser} from "../authentication/firebase";
// import {
//     // useGetLatestQuery,
//     // useGetNowPlayingQuery,
//     useGetPopularQuery,
//     // useGetTopRatedQuery,
//     // useGetTrendingQuery,
//     // useGetUpcomingQuery
// } from "../services/tmdbAPI";
import NavBar from "../components/NavBar";

import { 
    Grid,
    Box
} from "@mui/material";

const HomePage = () => {
    // const navigate = useNavigate();
    // const btnLogoutHandler = async() => {
    //     await logoutUser();
    //     navigate("/login")
    // }

    // const {
    //     data: popular_movie,
    //     error,
    //     isLoading: popular_movie_loading
    // } = useGetPopularQuery();

    return (
        <Box sx={{width: 'auto', height: '100%', display:"flex", justifyContent:"space-between", gap:"0.5em", p:2}}>
            <Grid container spacing={2}>
                <NavBar />
            </Grid>
        </Box>
    )
}

export default HomePage;
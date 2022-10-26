import React from "react";

import {
    useGetTvOnAirQuery,
    useGetTopRatedQuery
} from "../services/tmdbAPI";
import loading from '../assets/loading.gif';
import NavBar from "../components/NavBar";
import MovieBanner from "../components/MovieBanner";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

import { Grid } from "@mui/material";

const WatctListPage = () => {
    const {
        data: data_banner,
        error: error_banner,
        isLoading: loading_banner
    } = useGetTvOnAirQuery();
    const {
        data: data_list,
        error: error_list,
        isLoading: loading_list
    } = useGetTopRatedQuery();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "95vh" }}
        >
            <NavBar />
            {
                loading_banner ? (<img src={loading} alt="loading" />) : (
                    error_banner ? (console.log("error: ", error_banner)) : (
                        <MovieBanner movies={data_banner.results} />
                    )
                )
            }
            {
                loading_list ? (<img src={loading} alt="loading" />) : (
                    error_list ? (console.log("error: ", error_list)) : (
                        <MovieList movies={data_list.results} title="Top Picks For You" />
                    )
                )
            }
            <Footer />
        </Grid>
    )
};

export default WatctListPage;
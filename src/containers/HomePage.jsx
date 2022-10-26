import React from "react";

import {
    useGetNowPlayingQuery,
    useGetPopularQuery,
    useGetTopRatedQuery,
    useGetTrendingQuery,
    useGetTvPopularQuery,
    useGetTvOnAirQuery
} from "../services/tmdbAPI";
import loading from '../assets/loading.gif';
import NavBar from "../components/NavBar";
import MovieBanner from "../components/MovieBanner";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

import { 
    Grid
} from "@mui/material";

const HomePage = () => {
    const {
        data: nowplay_movie,
        error: error_nowplay,
        isLoading: nowplay_movie_loading
    } = useGetNowPlayingQuery();
    const {
        data: toprate_movie,
        error: error_toprate,
        isLoading: toprate_movie_loading
    } = useGetTopRatedQuery();
    const {
        data: popular_movie,
        error: error_popular,
        isLoading: popular_movie_loading
    } = useGetPopularQuery();
    const {
        data: trend_movie,
        error: error_trend,
        isLoading: trend_movie_loading
    } = useGetTrendingQuery();
    const {
        data: tvpop_movie,
        error: error_tvpop,
        isLoading: tvpop_movie_loading
    } = useGetTvPopularQuery();
    const {
        data: tvonair_movie,
        error: error_tvonair,
        isLoading: tvonair_movie_loading
    } = useGetTvOnAirQuery();

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
                nowplay_movie_loading ? (<img src={loading} alt="loading" />) : (
                    error_nowplay ? (console.log("error: ", error_nowplay)) : (
                        <MovieBanner movies={nowplay_movie.results} />
                    )
                )
            }
            {
                toprate_movie_loading ? (<img src={loading} alt="loading" />) : (
                    error_toprate ? (console.log("error: ", error_toprate)) : (
                        <MovieList movies={toprate_movie.results} title="Continue Watching" />
                    )
                )
            }
            {
                popular_movie_loading ? (<img src={loading} alt="loading" />) : (
                    error_popular ? (console.log("error: ", error_popular)) : (
                        <MovieList movies={popular_movie.results} title="Popular" />
                    )
                )
            }
            {
                tvonair_movie_loading ? (<img src={loading} alt="loading" />) : (
                    error_tvonair ? (console.log("error: ", error_tvonair)) : (
                        <MovieList movies={tvonair_movie.results} title="Watchlist" />
                    )
                )
            }
            {
                trend_movie_loading ? (<img src={loading} alt="loading" />) : (
                    error_trend ? (console.log("error: ", error_trend)) : (
                        <MovieList movies={trend_movie.results} title="Trending" />
                    )
                )
            }
            {
                tvpop_movie_loading ? (<img src={loading} alt="loading" />) : (
                    error_tvpop ? (console.log("error: ", error_tvpop)) : (
                        <MovieList movies={tvpop_movie.results} title="Top Picks For You" />
                    )
                )
            }
            <Footer />
        </Grid>
    )
}

export default HomePage;
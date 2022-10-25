import React from "react";

import {
    useGetPopularQuery,
    useGetTopRatedQuery,
    useGetTrendingQuery,
    useGetTvOnAirQuery,
    useGetMovieByIdQuery,
    useGetTvByIdQuery
} from "../services/tmdbAPI";
import loading from '../assets/loading.gif';
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";
import CardViewMovie from "../components/CardViewMovie";
import CardPlayMovie from "../components/CardPlayMovie";
import Footer from "../components/Footer";
import {Grid} from "@mui/material";
import { useLocation } from "react-router-dom";

const ViewMovie = ({path}) => {
    const location = useLocation();
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
        data: tvonair_movie,
        error: error_tvonair,
        isLoading: tvonair_movie_loading
    } = useGetTvOnAirQuery();
    const {
        data: getbyid_movie,
        error: error_getbyid,
        isLoading: getbyid_movie_loading
    } = useGetMovieByIdQuery(location.state.movieid);
    const {
        data: gettvbyid_movie,
        error: error_gettvbyid,
        isLoading: gettvbyid_movie_loading
    } = useGetTvByIdQuery(location.state.movieid);

    // console.log(location.state.movieid);

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
                location.state.movietype === "movie" ? (
                    getbyid_movie_loading ? (<img src={loading} alt="loading" />) : (
                        error_getbyid ? (console.log("error: ", error_getbyid)) : (
                            path === "view" ? (
                                <CardViewMovie movie={getbyid_movie} />
                            ) : (
                                <CardPlayMovie movie={getbyid_movie} />
                            )
                        )
                    )
                ) : (
                    gettvbyid_movie_loading ? (<img src={loading} alt="loading" />) : (
                        error_gettvbyid ? (console.log("error: ", error_gettvbyid)) : (
                            path === "view" ? (
                                <CardViewMovie movie={gettvbyid_movie} />
                            ) : (
                                <CardPlayMovie movie={gettvbyid_movie} />
                            )
                        )
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
            <Footer />
        </Grid>
    )
};

export default ViewMovie;
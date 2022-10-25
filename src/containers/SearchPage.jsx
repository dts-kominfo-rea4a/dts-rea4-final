import React, {useState} from "react";

import { Grid, TextField, InputAdornment, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import { useGetMovieOrTvBySearchQuery } from "../services/tmdbAPI";
import loading from '../assets/loading.gif';

const SearchPage = () => {
    const location = useLocation();
    const [searchVal, setSearchVal] = useState(location.state.search);
    const [query, setQuery] = useState(searchVal);

    const movie = useGetMovieOrTvBySearchQuery(query);

    const searchOnChange = (event) => {
        setSearchVal(event.target.value);
    }
    const keypressHandler = (key) => {
        const key_code = key.key;

        if(key_code.toLowerCase() === 'enter'){
            setQuery(document.getElementById("txt-search").value);
        }
    }

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
            <TextField
                error
                label="Search Movie or TV Shows"
                id="txt-search"
                variant="outlined"
                value={searchVal}
                onChange={searchOnChange}
                onKeyDown={keypressHandler}
                sx={{marginBottom:'15px', marginTop:'12%', width:'500px', input: { color: 'red' }}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{color:'red'}} />
                        </InputAdornment>
                    )
                }}
            />
            {
                movie.isLoading ? (<img src={loading} alt="loading" />) : (
                    movie.error ? (console.log("error: ", movie.error)) : (
                        movie.data.results.length > 0 ? (
                                <MovieList movies={movie.data.results} />
                        ) : (
                            <>
                                <Typography variant="h4" sx={{marginTop:'50px', color:'red'}}>Opss... No matched data!</Typography>
                                <Typography variant="subtitle1" sx={{color:'red'}}>Psst! Try with another keywords</Typography>
                            </>
                        )
                    )
                )
            }
            <Footer />
        </Grid>
    )
};

export default SearchPage;
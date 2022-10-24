import React, {useEffect, useState} from 'react';
import MovieRow from '../Movie/MovieRow';
import useTmdbStore from '../../stores/tmdb';
import axios from "axios";
import Loading from '../../images/loading.gif'

function PopularIndonesia() {

    const tmdb = useTmdbStore();
    const [movies, setMovies] = useState();
    
    const myfetchData = async () => {
        const {data} = await axios.get( tmdb.url + 'discover/movie?api_key=' + tmdb.key + '&language=id&region=id&sort_by=popularity.desc&page=1&with_original_language=id&year=2022');
        setMovies(data);
    }
    
    // Fetch tmdb
    useEffect( () => {

        
        myfetchData();
        // eslint-disable-next-line
    },[]);

    return (
        movies ?  (
            <MovieRow title="Popular Indonesia" type="movie" items={movies} />
        ) : (
            <div style={{ textAlign: 'center' }}>
            <img src={Loading} width="30px" alt="Loading"/>
        </div>
    )
    )
    
}

export default PopularIndonesia
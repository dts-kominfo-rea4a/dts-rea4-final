import React, {useEffect, useState} from 'react';
import MovieRow from '../Movie/MovieRow';
import useTmdbStore from '../../stores/tmdb';
import axios from "axios";
import Loading from '../../images/loading.gif'

function Popular() {

    const tmdb = useTmdbStore();
    const [movies, setMovies] = useState();

    const myfetchData = async () => {
        const {data} = await axios.get( tmdb.url + 'movie/popular?api_key=' + tmdb.key + '&language=en-US&page=1');
        setMovies(data);
    }
    // Fetch tmdb
    useEffect( () => {
        myfetchData();
        // eslint-disable-next-line
    },[]);
      
     return (
        !movies ?  (
            <div style={{ textAlign: 'center' }}>
            <img src={Loading} width="30px" alt="Loading"/>
        </div>
          ) : (
            <>
        <MovieRow title="Popular" type="movie" items={movies} />
        </>
        )
    )
    
}

export default Popular
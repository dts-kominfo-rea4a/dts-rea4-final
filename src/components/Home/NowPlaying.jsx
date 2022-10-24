import React, {useEffect, useState} from 'react';
import MovieRow from '../Movie/MovieRow';
import useTmdbStore from '../../stores/tmdb';
import axios from "axios";
import Loading from '../../images/loading.gif'

function NowPlaying() {

    const tmdb = useTmdbStore();
    const [movies, setMovies] = useState();

    const myFetchData = async () => {
        const {data} = await axios.get( tmdb.url + 'movie/now_playing?api_key=' + tmdb.key );
        setMovies(data);
    }
    // Fetch tmdb
    useEffect( () => {
        myFetchData();
        // eslint-disable-next-line
    },[]);
   
     return (
        !movies ?  (
            <div style={{ textAlign: 'center' }}>
                <img src={Loading} width="30px" alt="Loading"/>
            </div>
          ) : (
            <>
        <MovieRow title="Now Playing" type="movie" items={movies} />
        </>
        )
    )
    
}

export default NowPlaying
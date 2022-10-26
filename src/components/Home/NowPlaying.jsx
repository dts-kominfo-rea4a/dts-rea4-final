import React, {useEffect, useState} from 'react';
import MovieRow from '../Movie/MovieRow';
import Loading from '../../images/loading.gif'
import tmdb from '../../config/tmdb';

function NowPlaying() {

    // const tmdb = useTmdbStore();
    const [movies, setMovies] = useState();

    const myFetchData = async () => {
        const {data} = await tmdb.get('movie/now_playing');
        setMovies(data);
    }
    // Fetch tmdb
    useEffect( () => {
        myFetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
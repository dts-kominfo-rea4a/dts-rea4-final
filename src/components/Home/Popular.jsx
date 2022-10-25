import React, {useEffect, useState} from 'react';
import MovieRow from '../Movie/MovieRow';
import Loading from '../../images/loading.gif';
import tmdb from '../../config/tmdb';

function Popular() {

    const [movies, setMovies] = useState();

    const myfetchData = async () => {
        const {data} = await tmdb.get('movie/popular',{params: { language: 'en-US',page:'1'}});
        setMovies(data);
    }
    // Fetch tmdb
    useEffect( () => {
        myfetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
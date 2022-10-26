import React, {useEffect, useState} from 'react';
import MovieRow from '../Movie/MovieRow';
import Loading from '../../images/loading.gif'
import tmdb from '../../config/tmdb';

function PopularIndonesia() {

    const [movies, setMovies] = useState();
    
    const myfetchData = async () => {
        const {data} = await tmdb.get('discover/movie', {params: {language:'id', region:'id', sort_by:'popularity.desc',page:'1', with_original_language:'id',year:'2022'}});
        setMovies(data);
    }
    
    // Fetch tmdb_
    useEffect( () => {

        
        myfetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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